const Koa = require('koa')
const router = require('./router/router-common')
const bodyParser = require('koa-bodyparser')
const config = require('./config/default')
const session = require('koa-session-minimal') // koa 处理session中间件
const MysqlSession = require('koa-mysql-session') // 为koa-session-minimal 存储session到mysql提供接口操作
const app = new Koa()
app.use(bodyParser())
// session存储配置 配置使用mysql数据库存储session信息
const mysqlStore = new MysqlSession({
  user: config.account.database.USERNAME,
  password: config.account.database.PASSWORD,
  database: config.account.database.DATABASE,
  host: config.account.database.HOST
})
// 配置session中间件   nodejs+koa 本身并没有session处理的能力，所以需要第三方的session插件处理
app.use(session({
  key: 'USER_SID',
  store: mysqlStore
}))
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(config.account.port)
console.log(`The server is on port ` + config.account.port)
