'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('initializing...');

  useEffect(() => {
    // Test health endpoint
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setStatus('✓ API is healthy');
        } else {
          setStatus('✗ API error');
        }
      })
      .catch(() => setStatus('✗ Cannot reach API'));
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bulk Image Compressor
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Migración a Next.js 14 - En Construcción
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
          <p className="text-sm text-gray-500 mb-4">API Status:</p>
          <p className="text-lg font-semibold text-indigo-600">{status}</p>
          <div className="mt-6 text-left text-sm text-gray-600 space-y-2">
            <p>✓ Services migrateados</p>
            <p>✓ API Routes listos</p>
            <p>⚙ Frontend en desarrollo</p>
          </div>
        </div>
      </main>
    </div>
  );
}
