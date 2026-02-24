'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface User {
  id: string;
  email: string;
  tier: string;
  createdAt: string;
}

interface UsersTableProps {
  initialUsers?: User[];
}

export default function UsersTable({ initialUsers = [] }: UsersTableProps) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [loading, setLoading] = useState(!initialUsers.length);
  const [error, setError] = useState<string | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    if (initialUsers.length === 0) {
      fetchUsers();
    }
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/admin/users');

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const handleChangeTier = async (userId: string, newTier: string) => {
    try {
      setUpdatingId(userId);
      const response = await fetch(`/api/admin/users/${userId}/tier`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier: newTier }),
      });

      if (!response.ok) {
        throw new Error('Failed to update tier');
      }

      const data = await response.json();

      // Update users list
      setUsers(
        users.map((user) =>
          user.id === userId ? { ...user, tier: data.user.tier } : user
        )
      );
      setSelectedUserId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleExportUsers = async () => {
    try {
      setExporting(true);
      const response = await fetch('/api/admin/export/users', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to export users');
      }

      // Create blob and download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `users_${new Date().toISOString().split('T')[0]}.csv`;
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
    return <div className="text-center py-8 text-gray-600">Loading users...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold dark:text-white">Users</h2>
        <button
          onClick={handleExportUsers}
          disabled={exporting}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          {exporting ? 'Exporting...' : 'Export Users'}
        </button>
      </div>

      <div className="overflow-x-auto border rounded-lg dark:border-gray-700">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-700">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Email</th>
              <th className="px-4 py-3 text-left font-medium">Tier</th>
              <th className="px-4 py-3 text-left font-medium">Created Date</th>
              <th className="px-4 py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <td className="px-4 py-3 dark:text-gray-300">{user.email}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.tier === 'PRO'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
                    }`}
                  >
                    {user.tier}
                  </span>
                </td>
                <td className="px-4 py-3 dark:text-gray-300">{formatDate(user.createdAt)}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <div className="relative">
                      <button
                        onClick={() =>
                          setSelectedUserId(selectedUserId === user.id ? null : user.id)
                        }
                        className="px-3 py-1 bg-orange-600 text-white rounded text-xs hover:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-800 flex items-center gap-1"
                      >
                        Change Tier
                        <ChevronDown size={14} />
                      </button>
                      {selectedUserId === user.id && (
                        <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg z-10">
                          {['FREE', 'PRO'].map((tier) => (
                            <button
                              key={tier}
                              onClick={() => handleChangeTier(user.id, tier)}
                              disabled={updatingId === user.id}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg disabled:opacity-50 dark:text-gray-300"
                            >
                              {tier}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        Total Users: {users.length}
      </p>
    </div>
  );
}
