const express  = require('express');
const router = express.Router();
const book = require('../controller/book')


router.get("/essay/:id",book.getessayNew)
router.get("/novel/:id",book.getnovelNew)
router.get("/jotting/:id",book.getjottingNew)
router.get("/literature/:id",book.getliteratureNew)
// 20.加入购物车
router.post('/car', book.addCar)
router.post('/dingdan', book.addDingdan)

router.post('/shanchu', book.shanchuDingdan)




// router.get("/novel/:name",book.getsearch)


module.exports = router;