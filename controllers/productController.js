const Product = require('../model/Product')

// Create new Product
const product_create = async(req,res) => {
    const product = new Product({
        productName : req.body.productName,
        qtyPerUnit : req.body.qtyPerUnit,
        unitPrice : req.body.unitPrice,
        discontinued : req.body.discontinued,
        categoryId : req.body.categoryId
    })
    try {
        const savedProduct = await product.save();
        res.send(savedProduct)
        res.end();
    } catch (error) {
        res.status(400).send(error)
    }
   
}

// Read all products 
const product_getAll = async (req,res) => {
    const products = await Product.find()
    res.send(products)
}

// Get one Product
const product_byId = async (req, res) => {
    const product = await Product.findById(req.params.productId)
    res.send(product)
}

// Update product
const update_byId = async(req, res)=>{
    const product = {
        productName : req.body.productName,
        qtyPerUnit : req.body.qtyPerUnit,
        unitPrice : req.body.unitPrice,
        discontinued : req.body.discontinued,
        categoryId : req.body.categoryId
    }
    const updatedProduct = await Product.findByIdAndUpdate(
        {_id : req.params.productId},
        product
    )
    res.send(updatedProduct)
}

// Delete product
const delete_byId = async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId)
    res.send(deletedProduct)
}

module.exports = {
    product_create,
    product_getAll,
    product_byId,
    delete_byId,
    update_byId
}