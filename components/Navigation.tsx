'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export function Navigation() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setDarkMode(isDark);

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Apply theme class to HTML element and save to localStorage
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode, mounted]);

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
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`relative inline-flex items-center justify-between h-8 w-16 px-1 rounded-full transition-all duration-500 ${
            darkMode ? 'bg-contrast' : 'bg-gray-300'
          }`}
          aria-label="Toggle dark mode"
        >
          <Sun size={16} className="flex-shrink-0 transition-colors text-black relative z-10 ml-1" />
          <span
            className={`absolute inline-block h-6 w-6 transform rounded-full transition-all duration-500 ${
              darkMode ? 'bg-black translate-x-8' : 'bg-white translate-x-0'
            }`}
          />
          <Moon size={16} className={`flex-shrink-0 transition-colors ${darkMode ? 'text-white' : 'text-white'} relative z-10 mr-1`} />
        </button>
      </div>
    </div>
  );
}
