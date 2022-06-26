const http = require('http')
const server = http.createServer()

server.on('request', function (req, res) {
    // console.log(req);
    const url = req.url
    const method = req.method
    const str = 'your url:' + url + '\tyour method is:' + method
    console.log(str);
    res.end(str)
})

server.listen(80, function () {
    console.log('server running at http://127.0.0.1');
})