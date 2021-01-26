const Product = require('../models/Product');
const fs = require('fs');

exports.addProduct = (req, res, next) => {
    const product = new Product({
        ...req.body
    });
    product.save()
        .then(() => res.status(201).json({ message: "object saved!"}))  // promise
        .catch(error => res.status(400).json({error}))
};


exports.getAllProducts = (req, res, next) => {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({ error }));
};