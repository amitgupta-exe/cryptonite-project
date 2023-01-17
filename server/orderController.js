import express from "express";
import mongoose from "mongoose";
import order from './orderModel.js';

const router = express.Router();

export const getOrders = async (req, res) => {
    try {
        const orderList = await order.find();
        res.status(200).json(orderList)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const createOrder = async (req, res) => {
    const { products,
        orderAmount,
        billingName,
        mobileNo,
        email,
        address } = req.body;

    const newOrder = new order({
        products,
        orderAmount,
        billingName,
        mobileNo,
        email,
        address
    })
    try {
        await newOrder.save();
        res.status(201).json(newOrder)


    }
    catch (error) {
        res.status(409).json({ message: error.message })

    }
}
