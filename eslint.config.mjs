import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import jest from 'eslint-plugin-jest';

export default tseslint.config(
  eslintConfigPrettier,
  jest.configs['flat/recommended'],
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        process: true,
        module: true
      }
    },
    rules: {
      'jest/no-conditional-expect': 'off',
      '@typescript-eslint/array-type': ['error', { default: 'array' }],
      '@typescript-eslint/no-unused-expressions': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-vars': 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-destructuring': [
        'error',
        {
          array: false,
          object: true
        },
        {
          enforceForRenamedProperties: false
        }
      ],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-alert': 'error',
      'no-debugger': 'error'
    }
  }
);
