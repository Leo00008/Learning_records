const path = require('path')
const fs = require('fs')
//    ./  ../会抵消前面路径
// const pathStr = path.join('/a', '/b/c','./d')
// console.log(pathStr);

fs.readFile(path.join(__dirname, '/files/01.txt'), 'utf-8', function (err, dataStr) {
    //2.1失败结果
    console.log(err);
    console.log('---------');
    //2.2  成功结果
    console.log(dataStr);
})