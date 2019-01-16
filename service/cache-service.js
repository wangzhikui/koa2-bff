const dao = require('../dao/cache-dao')

let insertOne = function (value) {
  return dao.insertOne(value)
}

let queryByCode = function (value) {
  return dao.queryByCode(value)
}

let queryByType = function (value) {
  return dao.queryByType(value)
}

let removeByCode = function (value) {
  return dao.removeByCode(value)
}

let removeByType = function (value) {
  return dao.removeByType(value)
}

let queryAll = function () {
  return dao.queryAll()
}

module.exports = {
  insertOne,
  queryByCode,
  queryByType,
  removeByCode,
  removeByType,
  queryAll
}
