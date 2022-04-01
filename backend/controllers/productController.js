import express from "express";
import asyncHandler from "express-async-handler";
import Product from '../models/productModel.js';

// Get Products
export const getProducts = asyncHandler(async(req, res = express.response) => {
    const products = await Product.find({});
    res.json(products);
});

// Get Product by Id
export const getProductId = asyncHandler(async(req, res = express.response) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({
            ok: false,
            message: 'Product not found',
        });
    } 
});