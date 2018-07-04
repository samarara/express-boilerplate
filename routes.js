// use this module to register routes to keep server.js clean
const helloWorld = require('./routes/helloWorldRoute');

module.exports = function(app){
    helloWorld(app);
}