'use client';

import { useState, useEffect } from 'react';

export function Navigation() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply theme class to HTML element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="py-8 px-[120px] max-w-[1720px] mx-auto mb-8 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="https://aurora33.dev" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.aurora33.dev/i/63f5ff47-4b0d-464d-aba5-7ae3051660c3.webp"
            alt="Aurora33"
            className="h-8"
          />
        </a>

        {/* Theme Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(false)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-container-dark text-text-muted-dark' : 'hover:bg-container text-text-muted'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1m-16 0H1m15.364 1.636l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>

          <button
            onClick={() => setDarkMode(true)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-container-dark text-text-muted-dark' : 'hover:bg-container text-text-muted'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
