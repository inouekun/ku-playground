module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'react/jsx-props-no-spreading': 1,
    'react/no-unescaped-entities': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'space-before-function-paren': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/strict-boolean-expressions': 0
  }
}
