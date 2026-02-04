import express from 'express';
import { ProductModel } from '../modules/ProductModle.js';

const router = express.Router();

// ---------------- PRODUCT API ROUTES ----------------

// create product
router.post('/create', async (req, res) => {
    let newProduct = req.body;
    let newProductDoc = new ProductModel(newProduct);
    await newProductDoc.save();

    res.status(201).json({
        message: "Product created successfully",
        payload: newProductDoc
    });
});

// read products
router.get('/products', async (req, res) => {
    let products = await ProductModel.find();
    res.status(200).json({
        message: "Products fetched successfully",
        payload: products
    });
});

// read product by id
router.get('/products/:id', async (req, res) => {
    let objID = req.params.id;
    let productObj = await ProductModel.findById(objID);

    res.status(200).json({
        message: "Product fetched successfully",
        payload: productObj
    });
});

// update product
router.put('/update/:id', async (req, res) => {
    let objID = req.params.id;
    let modifiedProduct = req.body;

    await ProductModel.findByIdAndUpdate(
        objID,
        { $set: { ...modifiedProduct } }
    );

    res.status(200).json({
        message: "Product updated successfully",
        payload: modifiedProduct
    });
});

// delete product
router.delete('/delete/:id', async (req, res) => {
    let objID = req.params.id;
    await ProductModel.findByIdAndDelete(objID);

    res.status(200).json({
        message: "Product deleted successfully"
    });
});

router.get('/test', (req, res) => {
    res.send('Product API is working fine');
});

export default router;
