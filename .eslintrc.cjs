/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "liebe/all",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended"
  ],
  "env": {
    "vue/setup-compiler-macros": true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.json', '.vue'],
    project: 'tsconfig.eslint.json',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/ban-ts-comment': [
          'warn',
          {
            'ts-nocheck': 'allow-with-description',
            'minimumDescriptionLength': 5,
          },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
      },
    },
    {
      files: ['*.vue'],
      rules: {
        // Reports if a module's default export is unnamed
        // https://github.com/benmosher/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
        'import/no-anonymous-default-export': 'off',
        'vue/script-indent': 'off',
      },
    },
  ],
}
