const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        'base': resolve('src/base'),
        'utils': resolve('src/utils')
      }
    }
  },
  devServer: {
    port: 3500
  },
  lintOnSave: true
}
