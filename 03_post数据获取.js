//导入模块
const http =require("http")
const querystring = require("querystring")

//创建web服务对象实例
const server = http.createServer()
//监听事件 request
server.on('request',(req,res)=>{
  //定义变量存储数据
  let arr =[]
  //监听data事件，接收请求的数据
  req.on('data',buffer=>{
    arr.push(buffer)
   // console.log(buffer);
  })
  //监听end事件，数据接受结束
  req.on('end',()=>{
    let buffer = Buffer.concat(arr)
   // console.log(buffer);
    let post = querystring.parse(buffer.toString())
    console.log(post);
  })

})
//启动服务器
server.listen(8080,()=>{
  console.log("server is running at http://127.0.0.1:8080");
})
