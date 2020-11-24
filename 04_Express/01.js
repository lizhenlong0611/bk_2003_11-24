//案例：手写一个服务器软件，启动后要求用户访问根“/”输出`hello world`，用户访问`/html5`输出`2003`，用于通过post方式访问/post则输出`	post`。
//导入 express 模块
const express = require("express")

//创建 web 服务对象实例
const server = express()

//监听 get 请求
server.get('/',(req,res)=>{
  res.send("hello world")
})
server.get('/html5',(req,res)=>{
  res.send("2003")
})
//监听 post 请求
server.post('/post',(req,res)=>{
  res.send("post请求")
})
//启动服务器
server.listen(8080,()=>{
  console.log("server is running at http://127.0.0.1:8080");
})