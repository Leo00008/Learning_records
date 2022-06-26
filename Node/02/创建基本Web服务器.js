//倒入http模块
const http = require('http')

//创建web服务器实例
const server = http.createServer()

//为服务器绑定事件 监听客户请求
server.on('request', function (req, res) {
    console.log('someone visit our web server ');
})

server.listen(80, function () {
    console.log('server running at http://127.0.0.1 ');
})