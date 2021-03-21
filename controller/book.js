const url = require("url");
let successState = 0; // 表示成功
let failState = 1; // 表示失败

// exports.getessayNew = (req, res) => {
//     // 代表返回的数据结构
//     let resObj = { status: successState, message: '' }
//     let id = req.params.id
//         // 2.0 执行查询操作
//     let sql = 'select * from essaytable where bookId=' + id
//     req.db.driver.execQuery(sql, (err, data) => {
//         // 3.0 判断是否异常
//         if (err) {
//             resObj.status = failState
//             resObj.message = err.message
//             res.json(resObj)
//             return
//         }

//         // 4.0 获取数据成功
//         resObj.message = data
//         res.json(resObj)
//     })
// }

exports.getessayNew = (req, res) => {
  // 代表返回的数据结构
  // let resObj = { status: successState, message: '' }
  let id = req.params.id;
  // 2.0 执行查询操作
  let sql = "select * from essaytable where bookId=" + id;
  req.db.driver.execQuery(sql, (err, datas) => {
    res.json(datas);
  });
};

exports.getnovelNew = (req, res) => {
    // 代表返回的数据结构
    // let resObj = { status: successState, message: '' }
    let id = req.params.id;
    // 2.0 执行查询操作
    let sql = "select * from noveltable where bookId=" + id;
    req.db.driver.execQuery(sql, (err, datas) => {
      res.json(datas);
    });
  };

  exports.getjottingNew = (req, res) => {
    // 代表返回的数据结构
    // let resObj = { status: successState, message: '' }
    let id = req.params.id;
    // 2.0 执行查询操作
    let sql = "select * from jottingtable where bookId=" + id;
    req.db.driver.execQuery(sql, (err, datas) => {
      res.json(datas);
    });
  };

  exports.getliteratureNew = (req, res) => {
    // 代表返回的数据结构
    // let resObj = { status: successState, message: '' }
    let id = req.params.id;
    // 2.0 执行查询操作
    let sql = "select * from literaturetable where bookId=" + id;
    req.db.driver.execQuery(sql, (err, datas) => {
      res.json(datas);
    });
  };


  exports.addCar = (req, res) => {
    console.log(req.body);
    const result = req.body;
    // let resObj = { status: successState, message: '' }
    let sql = `insert into  carshop(username,bookname,bookprice,chubanshe,imgurl,year,author,count,checked,xiaojiprice)
                        values ('${result.username}','${result.bookname}',${result.bookprice},'${result.chuban}','${result.imgurl}','${result.year}','${result.author}','${result.count}','${result.checked}','${result.xiaojiprice}')`
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            console.log(err)
        }
        // 4.0 获取数据成功
        console.log("添加购物车成功")
        res.json(data);
    })

}


exports.addDingdan = (req, res) => {
  console.log(req.body);
  const result = req.body;
  // let resObj = { status: successState, message: '' }
  let sql = `insert into  dingdan(bookname,bookprice,chuban,imgurl,year,author,count,sumprice,xiaojiprice)
                      values ('${result.bookname}',${result.bookprice},'${result.chubanshe}','${result.imgurl}','${result.year}','${result.author}','${result.count}','${result.sumprice}','${result.xiaojiprice}')`
  req.db.driver.execQuery(sql, (err, data) => {
      // 3.0 判断是否异常
      if (err) {
          console.log(err)
      }
      // 4.0 获取数据成功
      console.log("添加订单成功")
      res.json(data);
  })

}


exports.shanchuDingdan = (req, res) => {
  console.log(req.body);
  const result = req.body;
  // let resObj = { status: successState, message: '' }
  let sql = `DELETE FROM carshop WHERE bookname='${result.name}'`
  req.db.driver.execQuery(sql, (err, data) => {
      // 3.0 判断是否异常
      if (err) {
          console.log(err)
      }
      // 4.0 获取数据成功
      console.log("删除成功")
      res.json(data);
  })

}

exports.getAllNovelProducts = (req, res) => {
  var pageIndex = req.query.pageIndex;
  var pageSize = req.query.pageSize;
  var sql = "";
  if (pageIndex && pageSize) {
    sql = `select * from noveltable limit ${
      (pageIndex - 1) * pageSize
    },${pageSize}`;
  } else {
    sql = "select * from noveltable";
  }
  req.db.driver.execQuery(sql, (err, datas) => {
    res.json(datas);
  });
};

exports.getsearch = (req, res) => {
  // 代表返回的数据结构
  // let name = req.params.name
  let name = req.params['name']
  // console.log(name);
  // 2.0 执行查询操作
  let sql = `select * from noveltable  where bookName like '%${name}%'`
  req.db.driver.execQuery(sql, (err, data) => {
      res.json(data)
  })
}
