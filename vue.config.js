const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://13.125.207.22:8081',  // APi 서버 URL
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};