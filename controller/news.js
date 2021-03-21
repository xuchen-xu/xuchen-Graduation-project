
function getAllNews(req, res) {
    //查询所有的新闻信息
    var sql = "select * from t_news";
    //req.db.driver是当我们配置了orm中间件之后就可以直接使用了
    //execQuery执行sql语句
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

function commitComment(req, res) {
    var sql = `insert into t_comments(name,content,newsid) values('${req.body.name}','${req.body.content}','${req.body.newsid}')`;
    req.db.driver.execQuery(sql, (err, datas) => {
        let resObj;
        if (err) {
            resObj = {
                status: -1,
                message: "查询数据出错" + err.mxxessage
            }
        } else {
            resObj = {
                status: 0,
                message: "评论成功"
            }
        }
        res.json(resObj);
    })
}


exports.getAllNews = getAllNews;
exports.commitComment = commitComment;