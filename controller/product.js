//Controller层，负责具体请求的处理

function getAllProducts(req, res) {
    var pageIndex = req.query.pageIndex;
    var pageSize = req.query.pageSize;
    var sql = "";
    if(pageIndex && pageSize){
        sql = `select * from t_products limit ${(pageIndex-1)*pageSize},${pageSize}`
    }
    else{
        sql = "select * from t_products"
    }
    req.db.driver.execQuery(sql, (err, datas) => {
        let resObj;
        if (err) {
            resObj = {
                status: -1,
                message: "查询数据出错" + err.message
            }
        } else {
            resObj = {
                status: 0,
                message: datas
            }
        }
        res.json(resObj);
    })
}

function getLunbo(req, res) {
    let resObj = {
        status: 0,   //自定义状态，只要服务器给客户端返回了status:0，就说明响应成功
        message: [{
            id: 1,
            url: 'http://www.igeekhome.com/data/upload/20200312/5e69cdd005061.jpg',
            img: 'http://www.igeekhome.com/data/upload/20200312/5e69cdd005061.jpg'
        }, {
            id: 2,
            url: 'http://www.igeekhome.com/data/upload/20200312/5e69cdf8b2cb6.jpg',
            img: 'http://www.igeekhome.com/data/upload/20200312/5e69cdf8b2cb6.jpg'
        }, {
            id: 3,
            url: 'http://www.igeekhome.com/data/upload/20200312/5e69ce92c85ce.jpg',
            img: 'http://www.igeekhome.com/data/upload/20200312/5e69ce92c85ce.jpg'
        }]
    }
    res.json(resObj)
}

function updateProductById(req,res){
    var id = req.params['id'];
    var body = req.body;
    var sql = `update t_products set name = '${body.name}',sell_price='${body.sell_price}' where id = '${id}'`;
    req.db.driver.execQuery(sql, (err, datas) => {
        let resObj;
        if (err) {
            resObj = {
                status: -1,
                message: "修改数据出错" + err.message
            }
        } else {
            resObj = {
                status: 0,
                message: "修改成功"
            }
        }
        res.json(resObj);
    })
}

function deleteProductById(req,res){
    var id = req.params['id'];
    var sql = `delete from t_products where id ='${id}'`;
    req.db.driver.execQuery(sql, (err, datas) => {
        let resObj;
        if (err) {
            resObj = {
                status: -1,
                message: "删除数据出错" + err.message
            }
        } else {
            resObj = {
                status: 0,
                message: "删除成功"
            }
        }
        res.json(resObj);
    })
}

exports.getAllProducts = getAllProducts;
exports.getLunbo = getLunbo;
exports.updateProductById = updateProductById;
exports.deleteProductById = deleteProductById;