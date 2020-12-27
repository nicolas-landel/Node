const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
//   });

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log('server started on port ${config.port}')
  })
  


module.exports = app;