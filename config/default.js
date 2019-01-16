const mysql = require('mysql')
const account = {
  // 启动端口
  port: 3000,
  // 数据库配置
  database: {
    DATABASE: 'bffdb',
    USERNAME: 'root',
    PASSWORD: '1',
    PORT: '3306',
    HOST: '127.0.01'
  }
}
// 数据库连接池配置
let pool = mysql.createPool({
  host: account.database.HOST,
  user: account.database.USERNAME,
  password: account.database.PASSWORD,
  database: account.database.DATABASE
})
// 单条sql执行器，返回一个promise
let sqlExecute = function (sql, values) {
  return new Promise((resolve, reject) => {
    // 获取数据库连接
    pool.getConnection(function (err, connection) {
      if (err) {
        console.log('获取数据库连接失败：' + err)
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            console.log('执行sql语句:' + sql + '失败：' + err)
            reject(err)
          } else {
            resolve(rows)
          }
          // 释放连接
          connection.release()
        })
      }
    })
  })
}
module.exports = {
  account,
  sqlExecute
}
