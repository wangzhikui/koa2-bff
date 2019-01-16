const sqlExecute = require('../config/default').sqlExecute

let insertOne = function (value) {
  let _sql = 'insert into bff_cachedata set code=?,value=?,type=?'
  return sqlExecute(_sql, value)
}

let queryByCode = function (value) {
  let _sql = 'select * from bff_cachedata where code=?'
  return sqlExecute(_sql, value)
}

let queryByType = function (value) {
  let _sql = 'select * from bff_cachedata where type=?'
  return sqlExecute(_sql, value)
}

let removeByCode = function (value) {
  let _sql = 'delete from bff_cachedata where code=?'
  return sqlExecute(_sql, value)
}

let removeByType = function (value) {
  let _sql = 'delete from bff_cachedata where type=?'
  return sqlExecute(_sql, value)
}

let queryAll = function () {
  let _sql = 'select * from bff_cachedata'
  return sqlExecute(_sql)
}

module.exports = {
  insertOne,
  queryByCode,
  queryByType,
  removeByCode,
  removeByType,
  queryAll
}
