const express = require('express');
const mongoose = require('mongoose');

const Product = require('./models/Product');

const app = express();

const connectionUri = 'mongodb+srv://nlandel:xsD2UZkuCG2MZf5p@cluster0.96blr.mongodb.net/test.test?retryWrites=true&w=majority';

  try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      connectionUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("Connected to the database")
    );

  } catch (e) {
    console.log("The connection to the database failed!", e);
  }


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/stuff', (req, res, next) => {
    const product = new Product({
        ...req.body
    });
    product.save()
        .then(() => res.status(201).json({ message: "object saved!"}))  // promise
        .catch(error => res.status(400).json({error}))
});

app.get('/api/stuff/:id', (req, res, next) => {
    Product.findOne({ id: req.params.id })
        .then(product => res.status(200).json(product))
        .catch(error => res.status(404).json({error}))
})

app.get('/api/stuff', (req, res, next) => {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({ error }))
})


module.exports = app;