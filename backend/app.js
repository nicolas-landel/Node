const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/products');
require('dotenv').config();
const Product = require('./models/Product');

const app = express();
app.use(bodyParser.json());

const uriPassword = process.env.URIPASS;
const connectionUri = `mongodb+srv://nlandel:${uriPassword}@cluster0.96blr.mongodb.net/test?retryWrites=true&w=majority`;

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

app.use('/products', productsRoutes);



app.get('/products/:id', (req, res, next) => {
    Product.findOne({ id: req.params.id })
        .then(product => res.status(200).json(product))
        .catch(error => res.status(404).json({error}))
})

app.get('/products', (req, res, next) => {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({ error }))
})


module.exports = app;