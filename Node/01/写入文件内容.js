////导入模块 ，来操作文件

const fs = require('fs')

fs.writeFile('./files/03.txt', '尝试写入内容', function (err) {
    console.log(err);
})