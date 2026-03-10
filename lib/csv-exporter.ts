/**
 * CSV Export Utility Functions
 * Generates CSV content for admin exports
 */

interface UserRecord {
  id: string;
  email: string;
  tier: string;
  createdAt: Date;
}

interface JobRecord {
  id: string;
  userEmail: string;
  fileCount: number;
  originalSize: bigint;
  compressedSize: bigint;
  format: string;
  createdAt: Date;
}

interface StatsRecord {
  totalUsers: number;
  totalCompressions: number;
  totalGB: number;
  freeCount: number;
  proCount: number;
}

/**
 * Format bytes to human-readable format (MB or GB)
 */
function formatBytes(bytes: bigint | number): string {
  const numBytes = typeof bytes === 'bigint' ? Number(bytes) : bytes;
  const mb = numBytes / (1024 * 1024);

  if (mb >= 1024) {
    return (mb / 1024).toFixed(2) + ' GB';
  }
  return mb.toFixed(2) + ' MB';
}

/**
 * Format date to readable format: "Feb 24, 2026"
 */
function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Escape CSV field values (wrap in quotes if contains comma, quote, or newline)
 */
function escapeCSVField(value: string): string {
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

/**
 * Export users to CSV format
 */
export function exportUsers(users: UserRecord[]): string {
  const headers = ['ID', 'Email', 'Tier', 'Created Date'];

  const rows = users.map((user) => [
    user.id,
    user.email,
    user.tier,
    formatDate(user.createdAt),
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map((row) => row.map(escapeCSVField).join(',')),
  ].join('\n');

  return csvContent;
}

/**
 * Export jobs to CSV format
 */
export function exportJobs(jobs: JobRecord[]): string {
  const headers = ['Job ID', 'User Email', 'File Count', 'Original Size', 'Compressed Size', 'Format', 'Created Date'];

  const rows = jobs.map((job) => [
    job.id,
    job.userEmail,
    job.fileCount.toString(),
    formatBytes(job.originalSize),
    formatBytes(job.compressedSize),
    job.format,
    formatDate(job.createdAt),
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map((row) => row.map(escapeCSVField).join(',')),
  ].join('\n');

  return csvContent;
}

/**
 * Export statistics to CSV format
 */
export function exportStats(stats: StatsRecord): string {
  const headers = ['Metric', 'Value'];

  const rows = [
    ['Total Users', stats.totalUsers.toString()],
    ['Total Compressions', stats.totalCompressions.toString()],
    ['Total GB Processed', stats.totalGB.toFixed(2)],
    ['Free Users', stats.freeCount.toString()],
    ['Pro Users', stats.proCount.toString()],
    ['Free vs Pro', `${((stats.freeCount / (stats.freeCount + stats.proCount)) * 100).toFixed(1)}% Free / ${((stats.proCount / (stats.freeCount + stats.proCount)) * 100).toFixed(1)}% Pro`],
  ];

  const csvContent = [
    headers.join(','),
    ...rows.map((row) => row.map(escapeCSVField).join(',')),
  ].join('\n');

  return csvContent;
}
