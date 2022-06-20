//引入express
const { request, response } = require("express");
const express = require("express")

//创建应用对象
const app = express();

//创建路由规则
//request是对请求报文的一个封装
//response 是对响应报文的一个封装
app.get('/', (request, response) => {
    //设置相应
    response.send("hello EXPRESS")
})

//监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动，监听8000中");
})