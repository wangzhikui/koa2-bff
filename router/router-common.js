const Router = require('koa-router')
const cache = require('../controller/cache-controller')
const router = new Router()

router.post('/bff/cache/insertone', cache.insertOne)
router.post('/bff/cache/querybycode', cache.queryByCode)
router.post('/bff/cache/querybytype', cache.queryByType)
router.post('/bff/cache/removebycode', cache.removeByCode)
router.post('/bff/cache/removebytype', cache.removeByType)
router.post('/bff/cache/queryall', cache.queryAll)

module.exports = router
