const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const product = require('./router/product')
const bookall = require('./router/bookall')
const book = require('./router/book')
const news = require('./router/news')
const orm = require('orm')

app.all('*', function(req, res, next) {
  console.log(req.method);
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-type');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
  res.header('Access-Control-Max-Age',6000);//预请求缓存10分钟
  next();  
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//挂载orm中间件
app.use(
  orm.express('mysql://root:root@127.0.0.1:3306/douban', {
    define: function(db, models, next) {
      next()
    }
  })
)

// app.use("/api",product)
// app.use("/api",news)
app.use('/', bookall);
app.use('/', book);

app.listen(3001,()=>{
    console.log("3001端口已运行")
})