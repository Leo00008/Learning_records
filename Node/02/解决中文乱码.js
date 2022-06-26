const http = require('http')
const server = http.createServer()

server.on('request', function (req, res) {
    // console.log(req);
    const url = req.url
    const method = req.method

    const str = `您的URL是：${url},您的Method是：${method}`
    //为了解决中文乱码，需要设置响应头
    res.setHeader('content-Type', 'text/html; charset=utf-8')
    console.log(str);
    res.end(str)
})

server.listen(8080, function () {
    console.log('server running at http://127.0.0.1:8080');
})