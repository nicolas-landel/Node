const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();


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

require('./routes/todos')(app)

module.exports = app;