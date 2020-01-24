'use strict';

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var app = express();
var port = 4000;

app.get('/', function (req, res) {
    return res.send('Hello world');
});

_models2.default.sequelize.sync().then(function () {
    app.listen(port, function () {
        console.log('Express server started');
    });
});