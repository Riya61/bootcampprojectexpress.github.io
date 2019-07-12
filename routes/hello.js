var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let first=req.query.first;
    let second=req.query.second;
    console.log(first)
    console.log(second)
    res.render('hello', { Name: first ,Name1: second });
});
router.post('/',function (req,res){
    let first1=req.body.first;
    console.log(first1)
    let second1=req.body.first;
    console.log(second1)
    res.render('hello', { Name: first1 ,Name1: second1 });

});

module.exports = router;
