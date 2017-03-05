/**
 * 1.写一个read模块，用来传入url地址，返回读取后的对象数组
 * 2.把上面的对象数组保存在数据库mongodb中
 * 3.建立一个web服务器显示保存的数据
 * 4.开启一个计划任务每小时更新一个数据库
 * 5.把此项目发布github并且部署阿里云上
 */
var read = require('./read').movie;
var write = require('./write').movie;
var async = require('async');
var Movie = require('../model').Movie;
// DEBUG=crawl:*     所有的都显示
var debug = require('debug')('crawl:main');
var url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
async.waterfall([
    function (callback) {
    // 再保存之前先全部清空一下再写入数据库中
        Movie.remove({},callback);
    },
    function (data,callback) {
        read(url,callback);
    },
    function (movies,callback) {
        write(movies,callback);
    }
],function (err,result) {
    debug('全部任务执行完毕');
});
