module.exports = {
  extends: [
    './index.js',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
