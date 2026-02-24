'use client';

import { useState, useEffect } from 'react';

interface Stats {
  totalUsers: number;
  totalCompressions: number;
  totalGB: number;
  freeCount: number;
  proCount: number;
}

interface StatsCardProps {
  initialStats?: Stats;
}

export default function StatsCard({ initialStats }: StatsCardProps) {
  const [stats, setStats] = useState<Stats | null>(initialStats || null);
  const [loading, setLoading] = useState(!initialStats);
  const [error, setError] = useState<string | null>(null);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    if (!initialStats) {
      fetchStats();
    }
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/admin/stats');

      if (!response.ok) {
        throw new Error('Failed to fetch stats');
      }

      const data = await response.json();
      setStats(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const handleExportStats = async () => {
    try {
      setExporting(true);
      const response = await fetch('/api/admin/export/stats', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to export stats');
      }

      // Create blob and download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `stats_${new Date().toISOString().split('T')[0]}.csv`;
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

  if (loading) {
    return <div className="text-center py-8 text-gray-600">Loading statistics...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  }

  if (!stats) {
    return <div className="text-center py-8 text-gray-600">No statistics available</div>;
  }

  const freePercentage =
    stats.freeCount + stats.proCount > 0
      ? ((stats.freeCount / (stats.freeCount + stats.proCount)) * 100).toFixed(1)
      : 0;
  const proPercentage =
    stats.freeCount + stats.proCount > 0
      ? ((stats.proCount / (stats.freeCount + stats.proCount)) * 100).toFixed(1)
      : 0;

  const statCards = [
    {
      label: 'Total Users',
      value: stats.totalUsers.toLocaleString(),
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
    },
    {
      label: 'Total Compressions',
      value: stats.totalCompressions.toLocaleString(),
      color: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
    },
    {
      label: 'GB Processed',
      value: stats.totalGB.toFixed(2),
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100',
    },
    {
      label: 'Free vs Pro',
      value: `${freePercentage}% / ${proPercentage}%`,
      color: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold dark:text-white">Statistics</h2>
        <button
          onClick={handleExportStats}
          disabled={exporting}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          {exporting ? 'Exporting...' : 'Export Stats'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {statCards.map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg ${card.color}`}
          >
            <p className="text-sm font-medium opacity-75 mb-2">{card.label}</p>
            <p className="text-3xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Tier Breakdown</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-2 dark:text-gray-300">
              <span>Free Users</span>
              <span>{stats.freeCount}</span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{
                  width: `${freePercentage}%`,
                }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2 dark:text-gray-300">
              <span>Pro Users</span>
              <span>{stats.proCount}</span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full"
                style={{
                  width: `${proPercentage}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
