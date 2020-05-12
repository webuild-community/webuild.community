module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  rules: {
    strict: 0,
    'react/prop-types': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
}
