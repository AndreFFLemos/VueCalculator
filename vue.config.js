
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',    
    port: 8080,           
    hot: true,            
    liveReload: true,     
    client: {
      webSocketURL: {
        hostname: 'localhost', 
        port: 8080,
        pathname: '/ws',
        protocol: 'ws',
      },
    },
  }
});

