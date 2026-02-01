import express from 'express';
import { ProductModel } from '../modules/ProductModle.js';

const router = express.Router();

// ---------------- PRODUCT API ROUTES ----------------

// create product
router.post('/create', async (req, res) => {
    // get new product from req
    let newProduct = req.body;

    // create new product document
    let newProductDoc = new ProductModel(newProduct);

    // save in db
    await newProductDoc.save();

    // send res
    res.status(201).json({
        message: "Product created successfully",
        payload: newProductDoc
    });
});

// read products
router.get('/products', async (req, res) => {
    // read products from db
    let products = await ProductModel.find();

    // send res
    res.status(200).json({
        message: "Products fetched successfully",
        payload: products
    });
});

// read product by id
router.get('/products/:id', async (req, res) => {
    // get object id from url
    let objID = req.params.id;

    // find product in DB
    let productObj = await ProductModel.findById(objID);

    // send res
    res.status(200).json({
        message: "Product fetched successfully",
        payload: productObj
    });
});

// update product
router.put('/update/:id', async (req, res) => {
    // get object id from url
    let objID = req.params.id;

    // get updated product from req
    let modifiedProduct = req.body;

    // make update
    await ProductModel.findByIdAndUpdate(
        objID,
        { $set: { ...modifiedProduct } }
    );

    // send res
    res.status(200).json({
        message: "Product updated successfully",
        payload: modifiedProduct
    });
});

// delete product
router.delete('/delete/:id', async (req, res) => {
    // get object id from url
    let objID = req.params.id;

    // delete product
    await ProductModel.findByIdAndDelete(objID);

    // send res
    res.status(200).json({
        message: "Product deleted successfully"
    });
});

// test route
router.get('/test', (req, res) => {
    res.send('Product API is working fine');
});

export default router;
