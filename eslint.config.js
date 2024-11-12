//novo formato de config (flat config)
import vue from 'eslint-plugin-vue';

export default [
  {
    files: ['*.js', '*.vue'],
    languageOptions: {
      parser: '@babel/eslint-parser', //converte codigo em ecma recente para versões mais antigas para serem usados em navegadores
      parserOptions: {
        requireConfigFile: true,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
    rules: {
    
    },
  },
];
