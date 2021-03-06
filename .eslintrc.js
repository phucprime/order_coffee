module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
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
    'react/display-name': 'off',
    'react/prop-types': 'off',
    camelcase: 'off'
  }
}
