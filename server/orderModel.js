import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    products:[Array],
    orderAmount: Number,
    billingName: String,
    mobileNo: String,
    email: String,
    address: String
})

let order = mongoose.model('orders', orderSchema)

export default order;