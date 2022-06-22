//处理data参数  把用户传来的data对象，转化成字符串的格式 从而提交给服务器
//因此定义 resolveData()函数
function resolveData(data) {
    var arr = [];
    for (var k in data) {
        var str = k + '=' + data[k]
        arr.push(str)
    }
    return arr.join('&')
}

// var res = resolveData({ name: 'leo', age: 20, sex: 'Man' })
// console.log(res);


function leoAjax(options) {
    var xhr = new XMLHttpRequest()
    // 调用 resolveData()函数  拼接 options里面的 data  把数据转化成字符串
    var qs = resolveData(options.data)

    //判断用户发送的是什么请求
    if (options.method.toUpperCase() === 'GET') {
        //发起GET请求
        xhr.open(options.method, options.url + '?' + qs)
        xhr.send()
    } else if (options.method.toUpperCase() === 'POST') {
        //发起POST请求
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)
    }
    //监听xhr
    xhr.onreadystatechange = function () {
        //判断条件 接收成功
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 把传来的字符串数据转换成js对象
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }

}