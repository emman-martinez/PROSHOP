import express from "express";
import { getProducts, getProductId } from "../controllers/productController.js";

const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get('/', getProducts);

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
router.get('/:id', getProductId);

export default router;