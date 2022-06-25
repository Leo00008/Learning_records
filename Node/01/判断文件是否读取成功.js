//导入模块 ，来操作文件
const fs = require('fs')

//调用readFile（）读取文件
fs.readFile('./files/01.txt', 'utf-8', function (err, dataStr) {

    if (err) {
        return console.log('读取失败' + err.message);
    }
    console.log('读取成功!!'+dataStr);
})