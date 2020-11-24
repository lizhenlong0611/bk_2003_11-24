//1、导入模块
const http = require("http")
const path  =require("path")
const fs= require("fs")
//2、创建web服务实例
const server =http.createServer()
//2、监听请求事件
server.on('request',(req,res)=>{
    //5、获取请求地址
    let pathname = req.url
    console.log(pathname);
      //对地址栏信息做处理
      pathname = pathname === "/" ? "/index.html" : pathname;
      //图标问题
      //解决方法一：添加一个if判断
     // if(pathname!=='favicon.ico'){
       //解决方法二：public文件夹下放一个名字为  favicon.ico  的图片
        let filename = path.join(__dirname, "public", pathname);
        console.log(filename);
        //6、读取文件
      fs.readFile(filename, (err, data) => {
        if(err){
          res.statusCode = 500
          res.end("server internal error.")
        }else{
          //读取成功
          res.end(data)
        }
      })
     // }
      

})
//4、启动服务器
server.listen(8080,()=>{
  console.log("server is running at http://127.0.0.1:8080");
})