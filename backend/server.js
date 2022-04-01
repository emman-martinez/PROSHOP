import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
import connectDB from './config/db.js';
// import products from './data/products.js';

import productRoutes from './routes/productRoutes.js';

// Environment Variables
dotenv.config();

// Data base
connectDB();

// Create the server
const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Routes
// Products
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

// Listen endpoints
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${ process.env.NODE_ENV } mode on port ${PORT}`.yellow.bold);
});