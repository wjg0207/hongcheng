module.exports = {
    devServer: {
        host: "localhost",
        port: "8081",
        open: true,
        proxy: {
            "/api": {
                target: "https://x.dscmall.cn/api/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}