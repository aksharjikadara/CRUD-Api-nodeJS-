const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

// categoryId : xxx,		// Category ID
// categoryName : xxx,		// Category Name

const Category = new mongoose.Schema([
    {
        categoryId : {
            type : mongoose.Schema.Types.ObjectId
        },
        categoryName : {
            type : String
        }
    }
])

module.exports = mongoose.model('category', Category)