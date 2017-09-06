module.exports = function(app) {

    app.get('/', function (req, res) {
        res.render('index');
    });
    app.get('/register', function (req, res) {
        res.render('register');
    });

}