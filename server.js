const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const port = 8080;
const app = express();

// returns middleware that only parses urlencoded bodies content-type: application/x-www-form-urlencoded
// if multipart/form-data is required used multer
app.use(bodyParser.urlencoded({ extended: true })); 

// returns middleware that only parses json
app.use(bodyParser.json()); 

// routes
routes(app);

app.listen(port);
console.info(`API is running on port ${port}`)