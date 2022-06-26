//倒入 fa模块来操作文件
const fs = require('fs')

//读取文档
fs.readFile('./成绩.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        console.log('读取失败' + err.message);
    }
    // console.log(dataStr);

    //把数据按照空格进行分割
    const arrOld = dataStr.split(' ')
    //循环分割后的数组 对每一项数据，进行字符串的替换
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ': '))
    })
    //把新输入的每一项合并，得到新的字符串
    const newStr = arrNew.join('\r\n')

    fs.writeFile('./files/成绩-ok', newStr, function (err) {
        if (err) {
            console.log('写入失败：') + err.message
        }
        console.log('写入成功');
    })
})

