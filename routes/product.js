const router = require('express').Router()
const productsRoute = require('../controllers/productController')

router.get('/:productId', productsRoute.product_byId)
router.get('/', productsRoute.product_getAll)
router.post('/', productsRoute.product_create)
router.put('/:productId', productsRoute.update_byId)
router.delete('/:productId', productsRoute.delete_byId)

module.exports = router