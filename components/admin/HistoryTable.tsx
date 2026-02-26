'use client';

import { useState, useEffect } from 'react';

interface Job {
  id: string;
  userEmail: string;
  fileCount: number;
  originalSize: bigint | number;
  compressedSize: bigint | number;
  format: string;
  createdAt: string;
}

interface HistoryTableProps {
  initialJobs?: Job[];
}

export default function HistoryTable({ initialJobs = [] }: HistoryTableProps) {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [loading, setLoading] = useState(!initialJobs.length);
  const [error, setError] = useState<string | null>(null);
  const [exporting, setExporting] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (initialJobs.length === 0) {
      fetchJobs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchJobs = async (start?: string, end?: string) => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();
      if (start) params.append('startDate', start);
      if (end) params.append('endDate', end);

      const response = await fetch(`/api/admin/jobs?${params.toString()}`);

      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }

      const data = await response.json();
      setJobs(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    fetchJobs(startDate, endDate);
  };

  const handleClearFilters = () => {
    setStartDate('');
    setEndDate('');
    fetchJobs();
  };

  const handleExportJobs = async () => {
    try {
      setExporting(true);
      const response = await fetch('/api/admin/export/jobs', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to export jobs');
      }

      // Create blob and download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `jobs_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setExporting(false);
    }
  };

  const formatBytes = (bytes: bigint | number) => {
    const numBytes = typeof bytes === 'bigint' ? Number(bytes) : bytes;
    const mb = numBytes / (1024 * 1024);
    if (mb >= 1024) {
      return (mb / 1024).toFixed(2) + ' GB';
    }
    return mb.toFixed(2) + ' MB';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (error && !jobs.length) {
    return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold dark:text-white">Job History</h2>
        <button
          onClick={handleExportJobs}
          disabled={exporting}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          {exporting ? 'Exporting...' : 'Export Jobs'}
        </button>
      </div>

      <form
        onSubmit={handleFilter}
        className="flex gap-4 items-end bg-gray-50 dark:bg-gray-900 p-4 rounded-lg"
      >
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800"
        >
          Filter
        </button>
        <button
          type="button"
          onClick={handleClearFilters}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700"
        >
          Clear
        </button>
      </form>

      {loading ? (
        <div className="text-center py-8 text-gray-600">Loading jobs...</div>
      ) : (
        <>
          <div className="overflow-x-auto border rounded-lg dark:border-gray-700">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">User Email</th>
                  <th className="px-4 py-3 text-left font-medium">Files</th>
                  <th className="px-4 py-3 text-left font-medium">Original Size</th>
                  <th className="px-4 py-3 text-left font-medium">Compressed Size</th>
                  <th className="px-4 py-3 text-left font-medium">Format</th>
                  <th className="px-4 py-3 text-left font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr
                    key={job.id}
                    className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
                  >
                    <td className="px-4 py-3 dark:text-gray-300">{job.userEmail}</td>
                    <td className="px-4 py-3 dark:text-gray-300">{job.fileCount}</td>
                    <td className="px-4 py-3 dark:text-gray-300">
                      {formatBytes(job.originalSize)}
                    </td>
                    <td className="px-4 py-3 dark:text-gray-300">
                      {formatBytes(job.compressedSize)}
                    </td>
                    <td className="px-4 py-3 dark:text-gray-300 uppercase">{job.format}</td>
                    <td className="px-4 py-3 dark:text-gray-300">{formatDate(job.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Total Jobs: {jobs.length}
          </p>
        </>
      )}
    </div>
  );
}
