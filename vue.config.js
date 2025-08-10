module.exports = {
    assetsDir: 'static',
    parallel: false,
    publicPath: './',
    devServer: {
        // 配置代理，解决跨域问题
        proxy: {
          '/api': {
            target: 'http://110.41.51.105:8082/', // 目标服务器地址
            changeOrigin: true,
            pathRewrite: {
              '^/api': '/wpi' // 将请求地址中的 '/api' 替换为空字符串
            }
          }
        }
      }
};