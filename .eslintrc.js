module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true, // чтобы ESLint не ругался на describe/it
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
  },
};