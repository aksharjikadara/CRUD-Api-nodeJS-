# CRUD-Api-nodeJ

Model for Product
// productId : xxx,		// Product ID
// productName : xxx,		// Product Name
// qtyPerUnit : xxx,		// Quantity of the Product
// unitPrice : xxx,			// Unit Price of the Product
// unitInStock : xxx,		// Unit in Stock
// discontinued :  xxx,		// Boolean (yes/no)
// categoryId : xxx,		// Category ID

Model for Category
// categoryId : xxx,		// Category ID
// categoryName : xxx,		// Category Name

Port is 3000

Route for Products
/api/products

Route for Category
/api/category


CREATE PRODUCT URL 
http://localhost:3000/api/products
-> Send data in BODY JSON formate 

CREATE CATEGORY URL 
http://localhost:3000/api/category
-> Send data in BODY JSON formate 

READ ALL PRODUCT URL
http://localhost:3000/api/products -> GET REQEST 

READ ALL CATEGORY URL 
http://localhost:3000/api/category -> GET REQEST 


READ ONE PRODUCT BY ID URL
http://localhost:3000/api/products/ID -> GET REQEST 

READ ONE CATEGORY BY ID URL 
http://localhost:3000/api/category/ID -> GET REQEST 


UPDATE ONE PRODUCT BY ID URL
http://localhost:3000/api/products/ID -> PUT REQEST AND CHANGES JSON DATA IN BODY

UPDATE ONE CATEGORY BY ID URL 
http://localhost:3000/api/category/ID -> PUT REQEST AND CHANGES JSON DATA IN BODY


DELETE ONE PRODUCT BY ID URL
http://localhost:3000/api/products/ID -> DELETE REQEST 

DELETE ONE CATEGORY BY ID URL 
http://localhost:3000/api/category/ID -> DELETE REQEST 

