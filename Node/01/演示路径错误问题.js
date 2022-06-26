//导入模块 ，来操作文件

const fs = require('fs')

//调用readFile（）读取文件

//填写完整路径即可解决
//移植性非常差，不利于维护
// fs.readFile('F:\\Web前端开发\\learnJavaScript\\Node\\01\\files\\1.txt', 'utf-8', function (err, dataStr) {

//     //2.1失败结果
//     console.log(err);
//     console.log('---------');
//     //2.2  成功结果
//     console.log(dataStr);
// })


//表示当前文件所处目录
console.log(__dirname);


fs.readFile(__dirname + '/files/01.txt', 'utf-8', function (err, dataStr) {

    //2.1失败结果
    console.log(err);
    console.log('---------');
    //2.2  成功结果
    console.log(dataStr);
})