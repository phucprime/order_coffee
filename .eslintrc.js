module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'standard-jsx',
    'standard-react',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'no-unused-expressions': 'off',
    'no-useless-escape': 'off',
    'generator-star-spacing': ['error', {
      before: false, after: true
    }],
    'yield-star-spacing': ['error', 'after'],
    camelcase: 'off'
  }
}
