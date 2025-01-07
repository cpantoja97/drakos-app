import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      ecmaVersion: 2021, // Supports modern ECMAScript features
      sourceType: 'module', // Treat files as ES Modules
      globals: globals.node, // Node.js globals
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules, // TS recommended rules
      'prettier/prettier': 'error', // Prettier issues are ESLint errors
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs', // Explicitly set CommonJS for `.js` files
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
];
