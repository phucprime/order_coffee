module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
