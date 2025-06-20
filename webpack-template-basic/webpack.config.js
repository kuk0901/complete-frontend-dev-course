// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        // 순서 중요
        use: [
            'style-loader', // html의 style태그에 해석된 css를 삽입
            'css-loader', // JS 에서 CSS 해석
            'postcss-loader',
            'sass-loader' // sass 해석
        ]
      },
      {
        test: /\.js$/,
        use: [
            'babel-loader',
        ]
      }
    ]
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
      new HtmlPlugin({
        template: "./index.html"
      }),
      new CopyPlugin({
        patterns: [
          { from: 'static' }
        ]
      })
  ],
  devServer: {
    host: 'localhost'
  }
}