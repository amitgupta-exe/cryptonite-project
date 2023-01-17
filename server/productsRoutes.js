import express from 'express';

import { getProducts, addProduct, getProduct, editProduct, deleteProduct } from './productsController.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', addProduct);
router.get('/:id', getProduct);
router.patch('/:id', editProduct);
router.delete('/:id', deleteProduct);

export default router;