const HelloWorld = require('./../models/helloWorldModel');

// sample get route using qs parametsrs
exports.hello_world_get = function(req, res) {
    const name = req.query.name;
    if(!name) {
        return res.status(400).json({
            error: 'no name provided for greeting'
        });
    }
    const helloWorld = new HelloWorld(name, new Date());
    return res.status(200).json({
        greeting: helloWorld.greeting(),
        time: helloWorld.isoDateString
    });
}

// sample post route using x-www-form-urlencoded
exports.hello_world_post = function(req, res) {
    const name = req.body.name;
    if(!name) {
        return res.status(400).json({
            error: 'no name provided for greeting'
        });
    }
    const helloWorld = new HelloWorld(name, new Date());
    return res.status(200).json({
        greeting: helloWorld.greeting(),
        time: helloWorld.isoDateString
    });
}