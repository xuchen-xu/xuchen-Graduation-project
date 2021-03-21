var express = require("express");
var router = express.Router();

router.get("/list", function (req, res) {
  console.log(req.session.user);
  res.json(["小明", "小红"]);
});

router.get("/student/:id", function (req, res) {
  var id = req.params["id"];
  console.log(id);
  res.json(["小明"]);
});

//获取post请求参数 使用body-parser中间件
router.post("/login", function (req, res) {
  console.log(req.body);
  const { name, pwd } = req.body;
  if (name == "zhangsan" && pwd == "123") {
    req.session.user = req.body;
    res.json("登录成功");
  } else {
    res.json("登录失败");
  }
});

router.get("/layout", function (req, res) {
  req.session.user = null;
  res.json("退出登录成功");
});

//操作数据库
router.get("/essay", function (req, res) {
  // let sql = "SELECT * FROM contenttable"
  let sql = "SELECT * FROM essaytable";
  req.db.driver.execQuery(sql, (err, datas) => {
    res.json(datas);
  });
});

router.get("/users", function (req, res) {
  // let sql = "SELECT * FROM contenttable"
  let sql = "SELECT * FROM users";
  req.db.driver.execQuery(sql, (err, datas) => {
    res.json(datas);
  });
});

router.get("/novel", function (req, res) {
  // let sql = "SELECT * FROM contenttable"
  let sql = "SELECT * FROM noveltable";
  req.db.driver.execQuery(sql, (err, datas) => {
    res.json(datas);
  });
});

router.get("/home", function (req, res) {
  // let sql = "SELECT * FROM contenttable"
  let sql = "SELECT * FROM home";
  req.db.driver.execQuery(sql, (err, datas) => {
    res.json(datas);
  });
});

router.get("/jotting", function (req, res) {
  // let sql = "SELECT * FROM contenttable"
  let sql = "SELECT * FROM jottingtable";
  req.db.driver.execQuery(sql, (err, datas) => {
    res.json(datas);
  });
});

router.get("/literature", function (req, res) {
  // let sql = "SELECT * FROM contenttable"
  let sql = "SELECT * FROM literaturetable";
  req.db.driver.execQuery(sql, (err, datas) => {
    res.json(datas);
  });
});

router.get("/carshop", function (req, res) {
  // let sql = "SELECT * FROM contenttable"
  let sql = "SELECT * FROM carshop";
  req.db.driver.execQuery(sql, (err, datas) => {
    res.json(datas);
  });
});


router.get("/dingdan", function (req, res) {
  // let sql = "SELECT * FROM contenttable"
  let sql = "SELECT * FROM dingdan";
  req.db.driver.execQuery(sql, (err, datas) => {
    res.json(datas);
  });
});

router.get("/search/:name", function (req, res) {
  // let sql = "SELECT * FROM contenttable"
  let name = req.params["name"];
  console.log(name, "11111");
  // 2.0 执行查询操作
  let sql = `select * from noveltable  where bookName like '%${name}%'`;
  req.db.driver.execQuery(sql, (err, data) => {
    res.json(data);
  });
});

router.get("/qqwwaddcarshop/:name", function (req, res) {
  // let sql = "SELECT * FROM contenttable"
  let name = req.params["name"];
  // console.log(name,"xxxxxx111");
  // 2.0 执行查询操作
  let sql = `select * from carshop where username='${name}'`;
  //  console.log("222222222222")
  req.db.driver.execQuery(sql, (err, data) => {
    res.json(data);
  });
});

router.get("/searchessay/:name", function (req, res) {
  // let sql = "SELECT * FROM contenttable"
  let name = req.params["name"];
  console.log(name);
  // 2.0 执行查询操作
  let sql = `select * from essaytable  where bookName like '%${name}%'`;
  req.db.driver.execQuery(sql, (err, data) => {
    res.json(data);
  });
});

router.get("/searchjotting/:name", function (req, res) {
  // let sql = "SELECT * FROM contenttable"
  let name = req.params["name"];
  console.log(name);
  // 2.0 执行查询操作
  let sql = `select * from jottingtable  where bookName like '%${name}%'`;
  req.db.driver.execQuery(sql, (err, data) => {
    res.json(data);
  });
});

router.get("/searchliterature/:name", function (req, res) {
  // let sql = "SELECT * FROM contenttable"
  let name = req.params["name"];
  console.log(name);
  // 2.0 执行查询操作
  let sql = `select * from literaturetable  where bookName like '%${name}%'`;
  req.db.driver.execQuery(sql, (err, data) => {
    res.json(data);
  });
});




module.exports = router;
