const Category = require('../model/Category')

// Create Category
const create = async(req, res)=>{
    const category = new Category({
        categoryName : req.body.categoryName
    })
    const savedCategory = await category.save()
    res.send(savedCategory)
}

//  Read all Category
const readAll = async(req,res) => {
    const categorys = await Category.find()
    res.send(categorys)
}

// Get one Category
const readById = async (req, res)=>{
    const category = await Category.findById(req.params.categoryId)
    res.send(category)
}

// Update Category
const updateById = async (req, res)=>{
    const category = {
        categoryName : req.body.categoryName
    }
    const Updatedcategory = await Category.findByIdAndUpdate(
        {_id : req.params.categoryId}, 
        category
        )
    res.send(Updatedcategory)
}

// Delete Category
const deleteById = async (req, res)=>{
    const category = await Category.findByIdAndDelete(req.params.categoryId)
    res.send(category)
}

module.exports = {
    create,
    readAll,
    readById,
    deleteById,
    updateById
}