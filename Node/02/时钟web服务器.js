const http = require('http')
const fs = require('fs')
const server = http.createServer()
const path = require('path')

server.on('request', (req, res) => {
    const url = req.url
    //   url=   /clock/index.html
    let fpath = ''

    if (url === '/') {
        fpath = path.join(__dirname, '/clock/index.html')
    }else{
        fpath = path.join(__dirname, '/clock', url)
    }

    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) return res.end('<h1>404 Not Found</h1>');
        res.end(dataStr)
    })
})

server.listen(8080, () => {
    console.log('当前端口8080,地址:http://127.0.0.1:8080');
})