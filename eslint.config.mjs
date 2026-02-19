import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import prettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['**/*.css', 'public/', '.next/', 'node_modules/', 'coverage/'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      '@next/next': nextPlugin,
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,

      ...reactHooks.configs.recommended.rules,

      ...jsxA11y.configs.recommended.rules,

      ...nextPlugin.configs.recommended.rules,

      ...prettier.rules,

      'no-param-reassign': ['error', { props: false }],
      'no-plusplus': 'off',
      'consistent-return': 'off',

      'react/display-name': 'off',
      '@typescript-eslint/no-require-imports': 'off',

      'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],

      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: true,
          shorthandFirst: true,
          shorthandLast: false,
        },
      ],
      'react/require-default-props': 'off',
      'react/prop-types': 'off',

      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },

  {
    files: ['*.config.{js,ts}', '*.config.{mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
);
