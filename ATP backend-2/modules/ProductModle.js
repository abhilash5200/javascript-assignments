import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productid: Number,
    name: String,
    price: Number,
    brand: String
});

export const ProductModel = mongoose.model('product', productSchema);


