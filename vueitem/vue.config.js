//这个是vue项目的配置文件 名字必须为vue.config.js
const goods = require('./src/json/product.json')
module.exports = {
    devServer: {
        host: "localhost",
        port: "8081",
        open: true
    }
}