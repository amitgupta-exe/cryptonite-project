import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import productRoutes from './productsRoutes.js';
import orderRoutes from './orderRoutes.js'

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/products', productRoutes);
app.use('/orders', orderRoutes)

const CONNECTION_URL = 'mongodb+srv://amit:1234@cluster0.t3tw5.mongodb.net/test';

const express = require("express");
const path = require("path");

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// API routes
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

const PORT = process.env.PORT || 5000;



mongoose.set('strictQuery', true);

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true, //deprecated
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App running on ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(error);
    })

