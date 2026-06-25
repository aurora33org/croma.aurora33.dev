/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Aurora33 semantic tokens
        background:         'var(--background)',
        foreground:         'var(--foreground)',
        card:               'var(--card)',
        primary:            'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary:          'var(--secondary)',
        muted:              'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        border:             'var(--border)',
        rule:               'var(--rule)',
        'chart-1':          'var(--chart-1)',
        'chart-2':          'var(--chart-2)',
        'chart-3':          'var(--chart-3)',
        'chart-4':          'var(--chart-4)',
        'chart-5':          'var(--chart-5)',

        // Legacy aliases — backward-compat para componentes no refactorizados
        text:               'var(--foreground)',
        'text-muted':       'var(--muted-foreground)',
        'bg-dark':          'var(--background)',
        'text-dark':        'var(--foreground)',
        'text-muted-dark':  'var(--muted-foreground)',
        container:          'var(--card)',
        'container-dark':   'var(--card)',
        contrast:           'var(--primary)',
        'contrast-v2':      'var(--secondary)',
      },
      fontFamily: {
        'geist-sans': ['var(--font-geist-sans)', 'ui-sans-serif', 'sans-serif'],
        'geist-mono': ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        instrument:   ['var(--font-instrument)', 'ui-serif', 'serif'],
        jetbrains:    ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        none:    '0',
        sm:      '0',
        DEFAULT: '0',
        md:      '0',
        lg:      '0',
        xl:      '0',
        '2xl':   '0',
        '3xl':   '0',
        full:    '9999px',
      },
    },
  },
  plugins: [],
}
