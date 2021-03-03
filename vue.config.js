module.exports = {
  
  devServer: {
    port: 3001,
    proxy: {
      "/": {
        // target: "http://ylyh.liuheco.com",
        target: 'http://192.168.1.168',
        pathRewrite: {
          '^/': '/' //代理的路径
        }
      }
    }
  }
}