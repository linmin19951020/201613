var express = require('express');
var Movie = require('./model').Movie;
var path = require('path');
var app = express();
// 设置模板引擎
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
// 设置路由中间件
app.use(express.static('./node_modules'));
app.get('/',function (req,res) {
    Movie.find({},function (err,movies) {
        res.render('index',{movies});
    })
});
app.listen(80);
