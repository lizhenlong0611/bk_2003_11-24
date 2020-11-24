//导入模块
const http = require("http")
const url  =require("url")
//创建web服务对象实例
const server = http.createServer()
//监听事件 request
 server.on('request',(req,res)=>{
//方法一：数据解构{query}
 /*  let {query} = url.parse(req.url,true)
  console.log(query) */
 // 方法二：
 let arr = url.parse(req.url,true)
 console.log(arr);
 console.log(arr.query);
}) 
//启动服务器
server.listen(8080,()=>{
  console.log("server is running at http://127.0.0.1:8080");
})