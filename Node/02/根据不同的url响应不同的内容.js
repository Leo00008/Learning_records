const http = require('http')
const server = http.createServer()

server.on('request', function (req, res) {
    const url = req.url  //获取到url
    let content = '<h1> 404 NOT FOUND</h1>'  //默认返回内容  404 not found

    if (url === '/' || url === '/index.html') {//判断用户请求
        content = '<h1>欢迎来到 首页</h1>'
    } else if (url === '/about.html') {
        content = '<h1>欢迎来到   关于页面</h1>'
    }
    //设置响应头
    res.setHeader('content-Type', 'text/html; charset=utf-8')
    //返回数据
    res.end(content)
})


server.listen(8080, function () {
    console.log(`当前代码运行在：http://127.0.0.1:8080`);
})