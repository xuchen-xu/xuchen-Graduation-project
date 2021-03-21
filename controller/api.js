'use strict'

let successState = 0 // 表示成功
let fialState = 1 // 表示失败


function getIPAdress() {
    var interfaces = require('os').networkInterfaces();　　
    for (var devName in interfaces) {　　　　
        var iface = interfaces[devName];　　　　　　
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }　　
    }
}

let { port } = require('../config/port')
let domain = `http://${getIPAdress()}:${port}`

// 2.0获取轮播图数据
exports.getlunbo = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select image_url,link_title,image_width,image_height,link_url,image_id from lunbo1 '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}

//获取小标题数据
exports.getgeneral = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select image_url,image_id from general '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}

exports.getgeneral2 = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select image_url,image_id from general2 '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}


//获取品牌图标
exports.geticon = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select * from icons '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}

// 获取空行图
exports.getblank = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select * from blank '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}

// 获取推荐商品
exports.getgoods = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select * from goods '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}

// 去逛逛
exports.getgo = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select * from go '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}


exports.getgoodsNature = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select * from goods_nature '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}

//获取标题
exports.getTitle = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select * from title '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}


exports.getCup = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select * from cups '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}


exports.getChair = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select * from chairs '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}


exports.getEasy = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select * from lunbo2 '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}

exports.getchair2 = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select * from chair2 '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}

exports.getoffice = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select * from office '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}

exports.getbiglight = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select * from biglight '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}

exports.getlamps = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select * from lamps '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}


exports.getdesk = (req, res) => {
    console.log("88888");
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select * from desks '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}

exports.getwoods = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 2.0 执行查询操作
    let sql = 'select * from woods '
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}

exports.getnew = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }
    let id = req.params.id
        // 2.0 执行查询操作
    let sql = 'select * from products  where id=' + id
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.json(resObj)
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.json(resObj)
    })
}




// 1.0 获取图片新闻资讯列表
exports.getnewslist = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 3.0 利用orm发送sql语句查询出来分页数据即可
    /*
    id : 资讯主键
    ,title : 资讯标题
    ,add_time ：资讯创建的事件
    ,zhaiyao：摘要
    ,click：点击量
    ,img_url:图片地址，前缀是7牛云存储域名
     */
    let sql = " SELECT id,title,add_time,left(zhaiyao,25) as zhaiyao,click,concat('" + domain + "',img_url) as img_url FROM dt_article where img_url > '' and channel_id = 6 limit 0,10 "
    console.log('获取图文资讯sql语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {
        // 4.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 5.0 获取数据成功
        resObj.message = datas
        res.end(JSON.stringify(resObj))
    })
}

// 2.0 根据资讯id获取资讯详细内容
// exports.getnew = (req, res) => {
//     // 代表返回的数据结构
//     let resObj = { status: successState, message: '' }

//     // 1.0 获取参数值
//     let newid = req.params.newid

//     // 2.0 执行查询操作
//     let sql = 'select id,title,click,add_time,content from dt_article  where id=' + newid
//     console.log('获取资讯明细sql===>', sql)
//     req.db.driver.execQuery(sql, (err, data) => {
//         // 3.0 判断是否异常
//         if (err) {
//             resObj.status = fialState
//             resObj.message = err.message
//             res.end(JSON.stringify(resObj))
//             return
//         }

//         // 4.0 获取数据成功
//         resObj.message = data
//         res.end(JSON.stringify(resObj))
//     })
// }

// // 3.0 商品
// exports.getgoods = (req, res) => {
//     // 代表返回的数据结构
//     let resObj = { status: successState, message: '' }
//     let pageindex = req.query.pageindex
//     if (!pageindex) {
//         pageindex = 1;
//     }
//     let pagesize = 10
//     let skipcount = (pageindex - 1) * pagesize

//     // 3.0 利用orm发送sql语句查询出来分页数据即可
//     /*
//     id : 资讯主键
//     ,title : 资讯标题
//     ,add_time ：资讯创建的事件
//     ,zhaiyao：摘要
//     ,click：点击量
//     ,img_url:图片地址，前缀是7牛云存储域名
//      */
//     let sql = `SELECT a.id,a.title,a.add_time,left(a.zhaiyao,25) as zhaiyao,a.click,concat('${domain}',a.img_url) as img_url,b.sell_price,b.market_price,b.stock_quantity FROM dt_article as a,dt_article_attribute_value b where a.id = b.article_id and a.channel_id = 7 limit ${skipcount},${pagesize} `
//     console.log('获取图文资讯sql语句：============>', sql)
//     req.db.driver.execQuery(sql, (err, datas) => {
//         // 4.0 判断是否异常
//         if (err) {
//             resObj.status = fialState
//             resObj.message = err.message
//             res.end(JSON.stringify(resObj))
//             return
//         }

//         // 5.0 获取数据成功
//         resObj.message = datas
//         res.end(JSON.stringify(resObj))
//     })
// }

/*
3.0.1 获取商品详情页面数据
-- 获取商品详情页标题，图文介绍信息等
SELECT * FROM dt_article da WHERE da.channel_id = 7 AND da.title LIKE '%新科%';
-- 获取商品详情页中的滚动图片
select * FROM dt_article_albums daa WHERE daa.article_id = 101;

-- 获取商品参数区域信息
SELECT daav.goods_no,daav.stock_quantity FROM dt_article_attribute_value daav  WHERE daav.article_id =101;

-- 商品品论
select * from dt_article_comment dac WHERE dac.article_id=101
 */

// 商品图文描述
exports.getgooddesc = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    let id = req.params.id;
    let sql = ` SELECT title,content FROM dt_article da WHERE da.id = ${id} `
    console.log('获取商品图文描述sql语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {
        // 4.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 5.0 获取数据成功
        resObj.message = datas
        res.end(JSON.stringify(resObj))
    })
}

// 获取商品标题，价格，参数区数据
// getgoodsinfo
exports.getgoodsinfo = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    let id = req.params.id;
    let sql = ` SELECT da.id,da.title,da.add_time,daa.goods_no,daa.stock_quantity,daa.market_price,daa.sell_price FROM dt_article da , dt_article_attribute_value daa 
				WHERE  da.id = daa.article_id and da.id = ${id} `
    console.log('获取商品获取商品标题，价格，参数区数据sql语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {
        // 4.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 5.0 获取数据成功
        resObj.message = datas
        res.end(JSON.stringify(resObj))
    })
}

//获取购物车列表数据
exports.getshopcarlist = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 1.0 获取参数值
    let ids = req.params.ids

    // 2.0 执行查询操作
    let sql = `
  			  SELECT count(distinct tb1.id) as cou, tb1.* FROM (
				SELECT  da.id,da.title,daa.sell_price,alb.thumb_path
				  FROM dt_article da 
				  LEFT JOIN dt_article_attribute_value daa ON (da.id = daa.article_id)
				  LEFT JOIN dt_article_albums alb ON (da.id = alb.article_id)
				WHERE  da.id IN(${ids}) ) AS tb1 GROUP BY tb1.id
  `

    console.log('获取购物车列表sql===>', sql)
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        for (var i = 0; i < resObj.message.length; i++) {
            resObj.message[i].thumb_path = domain + resObj.message[i].thumb_path
        }
        res.end(JSON.stringify(resObj))
    })
}


// 4.0 图片分享
exports.getimages = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    let cateid = req.params.cateid - 0

    let sql = ' select id,title,img_url,zhaiyao from dt_article where channel_id = 9 and category_id=' + cateid

    if (cateid <= 0) {
        sql = ' select * from dt_article where channel_id = 9 '
    }

    // 3.0 利用orm发送sql语句查询出来分页数据即可
    /*

     */

    console.log('获取图片分享sql语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {
        // 4.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 5.0 获取数据成功
        resObj.message = datas
        for (var i = 0; i < resObj.message.length; i++) {
            resObj.message[i].img_url = domain + resObj.message[i].img_url
        }
        res.end(JSON.stringify(resObj))
    })
}


// 4.0.1 根据id获取图片详细内容
exports.getimage = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 1.0 获取参数值
    let newid = req.params.imgid

    // 2.0 执行查询操作
    let sql = `select thumb_path as src  from dt_article_albums where article_id =${newid}`

    console.log('获取图片分享明细中缩略图sql===>', sql)
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        for (var i = 0; i < resObj.message.length; i++) {
            resObj.message[i].src = domain + resObj.message[i].src
        }
        res.end(JSON.stringify(resObj))
    })
}


// 4.0.1 根据id获取图片详细内容
exports.getimageInfo = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 1.0 获取参数值
    let newid = req.params.imgid

    // 2.0 执行查询操作
    let sql = `select id,title,click,add_time,content from dt_article where id=${newid}`

    console.log('获取图片分享明细sql===>', sql)
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}

// 5.0 获取图片分享分类
exports.getimgcategory = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 3.0 利用orm发送sql语句查询出来分页数据即可
    /*

     */
    let sql = ' select title,id from dtcmsdb4.dt_article_category where channel_id = 9 '
    console.log('获取图片分享分类sql语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {
        // 4.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 5.0 获取数据成功
        resObj.message = datas
        res.end(JSON.stringify(resObj))
    })
}

//6.0 获取评论信息
exports.getcomments = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 1.0 获取参数值
    let artid = req.params.artid
    let pageindex = req.query.pageindex
    let pagesize = 10;
    let skipCount = (pageindex - 1) * pagesize

    // 2.0 执行查询操作
    let sql = `select user_name,add_time,content from dt_article_comment where article_id = ${artid} order by add_time desc limit ${skipCount},${pagesize}`

    console.log('获取评论sql===>', sql)
    req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        // 4.0 获取数据成功
        resObj.message = data
        res.end(JSON.stringify(resObj))
    })
}


//7.0 提交评论数据
exports.postcomment = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    // 1.0 获取参数值
    let artid = req.params.artid
        //获取评论内容
    req.on('data', (chunk) => {
        let commentTxt = chunk.toString();
        const qs = require('querystring');
        let commentObj = qs.parse(commentTxt);

        // 2.0 执行查询操作
        let sql = `insert into  dt_article_comment(channel_id,article_id,parent_id,user_id,user_name,user_ip,
                                content,is_lock,add_time,is_reply,reply_content,reply_time)
                  values (7,${artid},0,0,'匿名用户','127.0.0.1','${commentObj.content}',0,NOW(),0,'',NOW())`

        console.log('post提交评论sql===>', sql)
        req.db.driver.execQuery(sql, (err, data) => {
            // 3.0 判断是否异常
            if (err) {
                resObj.status = fialState
                resObj.message = err.message
                res.end(JSON.stringify(resObj))
                return
            }

            // 4.0 获取数据成功
            resObj.message = '评论提交成功'
            res.end(JSON.stringify(resObj))
        })


    })
}