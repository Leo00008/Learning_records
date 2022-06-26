const path = require('path')
const fs = require('fs')

//创建两个正则
//   s空白字符  S非空白字符  * 表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

//
fs.readFile(path.join(__dirname, '/index.html'), 'utf-8', (err, dataStr) => {
    if (err) {
        return console.log('失败');
    }
    //    dataStr是整个文档
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

function resolveCSS(htmlStr) {
    //样式字符串  在此用正则处理文档
    const f1 = regStyle.exec(htmlStr)

    //将提取出来的字符串，进行replace操作
    const newCSS = f1[0].replace('<style>', '').replace('</style>', '')


    fs.writeFile(path.join(__dirname, '/clock/index.css'), newCSS, function (err) {
        if (err) return console.log('写入文件失败' + err.message);
        console.log('写入CSS成功');
    })
}

function resolveJS(htmlStr) {
    const f2 = regScript.exec(htmlStr)

    const newJS = f2[0].replace('<script>', '').replace('</script>', '')

    fs.writeFile(path.join(__dirname, '/clock/index.js'), newJS, function (err) {
        if (err) return console.log('写入JS失败：' + err.message);
        console.log("写入JS成功");
    })
}

function resolveHTML(dataStr) {

    const newHtml = dataStr.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regScript, '<script src="./index.js"></script>')



    fs.writeFile(path.join(__dirname, '/clock/index.html'), newHtml, function (err) {
        if (err) return console.log('写入HTML失败：' + err.message);
        console.log("写入HTML成功");
    })
}