//导入模块 ，来操作文件

const fs = require('fs')

//调用readFile（）读取文件

fs.readFile('./files/01.txt', 'utf-8', function (err, dataStr) {

    //2.1失败结果
    console.log(err);

    console.log('---------');
    //2.2  成功结果
    console.log(dataStr);
})
