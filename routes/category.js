const router = require('express').Router()
const categoryRoute = require('../controllers/categoryController')
   
router.get('/', categoryRoute.readAll)
router.get('/:categoryId', categoryRoute.readById)
router.post('/', categoryRoute.create)
router.put('/:categoryId', categoryRoute.updateById)
router.delete('/:categoryId', categoryRoute.deleteById)

module.exports = router
