const httpProxy = require('http-proxy')
httpProxy.createServer({
  target: {
    protocol: 'https:',
    host: 'www.instagram.com',
    hostname: 'www.instagram.com'
    // port: '80'
  },
  changeOrigin: true
}).listen(process.env.PORT || 5000)