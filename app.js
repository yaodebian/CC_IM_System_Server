// config
const viewTemp = require('./config/viewTemp')
const middleware = require('./config/middleware')
const errorhandle = require('./config/errorhandle')

// routes
const route = require('./routes/index')

const express = require('express')
const app = express()

viewTemp(app) // 设置模板引擎
middleware(app) // 中间件初始化
route(app) // 路由配置
errorhandle(app) // 错误处理监听

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})