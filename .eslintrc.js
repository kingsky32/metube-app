module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['eslint-plugin-no-inline-styles', 'eslint-plugin-import', '@typescript-eslint'],
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-inline-styles/no-inline-styles': 2,
    'import/extensions': 'off',
    'react/prop-types': 0,
    'react/jsx-wrap-multilines': 0,
    'import/no-unresolved': [2, { commonjs: true, amd: true, ignore: ['/'], caseSensitive: false }],
    'no-param-reassign': [
      2,
      {
        ignorePropertyModificationsFor: ['^draft'],
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'no-unused-expressions': 0,
    '@typescript-eslint/no-var-requires': 0,
    'one-var': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'react-hooks/exhaustive-deps': 0,
    'import/prefer-default-export': 0,
    'no-restricted-syntax': 0,
    'no-continue': 0,
    'prefer-promise-reject-errors': 0,
    'react/no-this-in-sfc': 0,
    'no-bitwise': 0,
    'no-shadow': 0,
    'react-native/split-platform-components': 0,
    'no-throw-literal': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
  settings: {
    'import/resolver': 'babel-plugin-root-import',
  },
};
