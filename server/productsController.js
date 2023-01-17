import express from "express";
import mongoose from "mongoose";
import product from './productModel.js';


const router = express.Router();

export const getProducts = async (req, res) => {

    try {
        const productList = await product.find();
        res.status(200).json(productList)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const getProduct = async (req, res) => {

    const { id } = req.params;

    try {
        const product = await product.findById(id);
        res.status(200).json(product)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const addProduct = async (req, res) => {

    const { image, title, description, price, tags, inCartQuantity } = req.body;
    const newProduct = new product({ image, title, description, price, tags, inCartQuantity })

    try {
        await newProduct.save();
        res.status(201).json(newProduct)

    } catch (error) {
        res.status(409).json({ message: error.message })
    }

}

export const editProduct = async (req, res) => {

    const { id } = req.params;
    const { image, title, description, price, tags, inCart } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedProduct = { image, title, description, price, tags, inCart, _id: id };

    await product.findByIdAndUpdate(id, updatedProduct, { new: true });

    res.json(updatedProduct);

}

export const deleteProduct = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await product.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully" })

}

export default router;