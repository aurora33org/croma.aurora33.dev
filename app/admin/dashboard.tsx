'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import UsersTable from '@/components/admin/UsersTable';
import HistoryTable from '@/components/admin/HistoryTable';
import StatsCard from '@/components/admin/StatsCard';
import { LogOut } from 'lucide-react';
import { logger } from '@/lib/utils/logger';

type TabType = 'users' | 'jobs' | 'stats';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('users');
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setLoggingOut(true);
      const response = await fetch('/api/auth/signout', {
        method: 'POST',
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      logger.error('Logout failed', { error });
    } finally {
      setLoggingOut(false);
    }
  };

  const tabs: { id: TabType; label: string }[] = [
    { id: 'users', label: 'Users' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'stats', label: 'Statistics' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Admin Dashboard
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Manage users, jobs, and view statistics
            </p>
          </div>

          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 dark:bg-red-700 dark:hover:bg-red-800"
          >
            <LogOut size={18} />
            {loggingOut ? 'Logging out...' : 'Logout'}
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-900 border-b dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-orange-600 text-orange-600 dark:border-orange-500 dark:text-orange-400'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'users' && <UsersTable />}
        {activeTab === 'jobs' && <HistoryTable />}
        {activeTab === 'stats' && <StatsCard />}
      </main>
    </div>
  );
}
