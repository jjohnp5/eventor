const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./routes');



const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/eventdb', {useNewUrlParser: true});

if(process.env.NODE_ENV === "production"){
  app.use(express.static("../client/build"));
}

app.use(apiRoutes);

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
