// ---------------- PRODUCT API ----------------

// in-memory products array
import exp from 'express';
//create mini -express(separate route)app
export const productApp=exp.Router();
let products =[];





// GET all products
// URL: GET http://localhost:3000/products
productApp.get('/products', (req, res) => {

    // send all products as response
    res.status(200).json({
        message: "all products",
        payload: products
    });
});


// POST create a new product
// URL: POST http://localhost:3000/products
productApp.post('/products', (req, res) => {

    // read product data from request body
    let newProduct = req.body;

    // add product into products array
    products.push(newProduct);

    // send success response
    res.status(201).json({
        message: "product created successfully",
        payload: newProduct
    });
});


// PUT update product by id
// URL: PUT http://localhost:3000/products/:id
productApp.put('/products/:id', (req, res) => {

    // read product id from URL parameter
    let productid = Number(req.params.id);

    // read modified product data from request body
    let modifiedProduct = req.body;

    // find index of product with given id
    let productIndex = products.findIndex(
        product => product.productid === productid
    );

    // if product not found
    if (productIndex === -1) {
        res.status(404).json({ message: "product not found" });
        return;
    }

    // update product (keep id safe)
    products[productIndex] = {
        productid: productid,
        ...modifiedProduct
    };

    // send success response
    res.status(200).json({
        message: "product updated successfully",
        payload: products[productIndex]
    });
});

// GET PRODUCT BY ID
// URL: GET http://localhost:3000/products/:id
productApp.get('/products/:id', (req, res) => {

    // read product id from url parameter
    let productid = Number(req.params.id);

    // find product by id
    let product = products.find(
        productObj => productObj.productid === productid
    );

    // if product not found
    if (!product) {
        res.status(404).json({ message: "product not found" });
        return;
    }

    // send response
    res.status(200).json({
        message: "product by id",
        payload: product
    });
});



// DELETE product by id
// URL: DELETE http://localhost:3000/products/:id
productApp.delete('/products/:id', (req, res) => {

    // read product id from URL parameter
    let productid = Number(req.params.id);

    // find index of product with given id
    let productIndex = products.findIndex(
        product => product.productid === productid
    );

    // if product not found
    if (productIndex === -1) {
        res.status(404).json({ message: "product not found" });
        return;
    }

    // remove product from array
    products.splice(productIndex, 1);

    // send success response
    res.status(200).json({
        message: "product deleted successfully"
    });
});