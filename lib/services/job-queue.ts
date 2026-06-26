import { runtime } from '../config';
import { logger } from '../utils/logger';

type Task = () => Promise<void>;

/**
 * In-memory job queue with a concurrency cap.
 *
 * Replaces fire-and-forget setImmediate processing: only `maxConcurrentJobs`
 * run at once; extra jobs wait in `pending`. When `active + pending` reaches
 * `maxQueue`, tryEnqueue returns false so the caller can reject with 503
 * instead of letting the box OOM. Single-instance only (in-memory).
 */
class JobQueue {
  private active = 0;
  private pending: Task[] = [];

  /** Try to enqueue a task. Returns false if the queue is full. */
  tryEnqueue(task: Task): boolean {
    if (this.active + this.pending.length >= runtime.maxQueue) {
      logger.warn(
        `Job queue full (active=${this.active}, pending=${this.pending.length}, max=${runtime.maxQueue}) — rejecting`
      );
      return false;
    }
    this.pending.push(task);
    this.pump();
    return true;
  }

  private pump(): void {
    while (this.active < runtime.maxConcurrentJobs && this.pending.length > 0) {
      const task = this.pending.shift()!;
      this.active++;
      // Run detached; never throws out of here (task handles its own errors).
      void task()
        .catch((err) => logger.error('Queued task failed:', err?.message || String(err)))
        .finally(() => {
          this.active--;
          this.pump();
        });
    }
  }

  size(): number {
    return this.active + this.pending.length;
  }
}

// Global singleton to persist across hot reloads in development
declare global {
  var jobQueueInstance: JobQueue | undefined;
}

export const jobQueue = global.jobQueueInstance || new JobQueue();

if (process.env.NODE_ENV === 'development') {
  global.jobQueueInstance = jobQueue;
}
