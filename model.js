var mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://127.0.0.1/201613crawl');
// 定义Schema   数据库骨架模型
var MoviesSchema = new mongoose.Schema({
    name:String,
    url:String
});
// 导出模型
exports.Movie = mongoose.model('Movie',MoviesSchema);
