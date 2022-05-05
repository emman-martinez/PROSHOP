import express from "express";
import asyncHandler from "express-async-handler";
import Product from '../models/productModel.js';

// Get Products
export const getProducts = asyncHandler(async(req, res = express.response) => {
    const products = await Product.find({});
    // res.status(401)
    // throw new Error('Not Authorized')
    res.json(products);
});

// Get Product by Id
export const getProductId = asyncHandler(async(req, res = express.response) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});