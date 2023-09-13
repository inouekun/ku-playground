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
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-uses-react': ['off'],
    'react/jsx-props-no-spreading': ['warn'],
    'react/no-unescaped-entities': ['off'],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'space-before-function-paren': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/explicit-function-return-type': 0
  }
}
