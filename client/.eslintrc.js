module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname
  },
  plugins: [
    'react'
  ],
  rules: {
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
