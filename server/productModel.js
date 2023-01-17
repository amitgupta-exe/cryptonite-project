import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    image: String,
    title: String,
    description: String,
    price: Number,
    tags: [String],
    inCartQuantity:Number,
})

let product = mongoose.model('merchproducts', productSchema)

export default product;