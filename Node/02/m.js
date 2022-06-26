console.log('加载了内置模块');

var a = 10
// console.log(a);

module.exports.username = 'leo'

module.exports.sayHello = function () {
    console.log('hello');
}




module.exports = {
    uname: 'leo'
}

exports = {
    uname: 'ha'
}