// basic .eslintrc.js compatible with react prettier and typescript
module.exports = {
  // Specifies the ESLint parser for TypeScript
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // Disable prop-types
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Enable prettier rules
    'prettier/prettier': 'error',
    // interface start with capital I
    '@typescript-eslint/interface-name-prefix': 'off',
    // allow "any" as type
    '@typescript-eslint/no-explicit-any': 'off',
    // allow @ts-ignore for testing purposes
    '@typescript-eslint/ban-ts-ignore': 'off',
    // allow requires
    '@typescript-eslint/no-var-requires': 'off',
  },
};
