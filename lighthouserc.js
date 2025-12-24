module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run build && npx serve -s build -p 3000',
      url: ['http://localhost:3000/portfolio'],
      numberOfRuns: 3,
      settings: {
        preset: 'desktop',
      },
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // Performance
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 300 }],
        'speed-index': ['error', { maxNumericValue: 3000 }],

        // Accessibility
        'categories:accessibility': ['error', { minScore: 0.9 }],

        // Best Practices
        'categories:best-practices': ['error', { minScore: 0.9 }],

        // SEO
        'categories:seo': ['error', { minScore: 0.9 }],

        // PWA (relaxed)
        'categories:pwa': ['warn', { minScore: 0.5 }],

        // Específicos para React
        'uses-long-cache-ttl': 'off',
        'unused-javascript': 'off',
        'bootup-time': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
