const helloWorld = require('./../controllers/helloWorldController');

module.exports = function(app) {
    app.route('/')
        .get(helloWorld.hello_world_get);

    app.route('/get')
        .get(helloWorld.hello_world_get);

    app.route('/post')
        .post(helloWorld.hello_world_post);
}