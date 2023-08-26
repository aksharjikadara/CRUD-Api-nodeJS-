const mongoose = require('mongoose')
const Category = require('../model/Category')
mongoose.set('strictQuery', true)

// productId : xxx,		// Product ID
// productName : xxx,		// Product Name
// qtyPerUnit : xxx,		// Quantity of the Product
// unitPrice : xxx,			// Unit Price of the Product
// unitInStock : xxx,		// Unit in Stock
// discontinued :  xxx,		// Boolean (yes/no)
// categoryId : xxx,		// Category ID

const productSchema = new mongoose.Schema({
        productId : {
            type : mongoose.Schema.Types.ObjectId,
        },
        productName : {
            type : String
        },
        qtyPerUnit : {
            type : Number
        },
        unitPrice : {
            type : Number
        },
        discontinued : {
            type : Boolean
        },
        categoryId : {           
             type : mongoose.Schema.Types.ObjectId, 
             ref : Category           
        }
    })

module.exports = mongoose.model('Product', productSchema)
