module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
      // vue
      // 'plugin:vue/essential', // Lv1
      'plugin:vue/strongly-recommended', // Lv2
      // 'plugin:vue/recommended', // Lv3
      // js
      'eslint:recommended',
  ],
  plugins: ['vue'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never',
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }]
  }
}