'use strict';

var _ejemploService = require('./ejemploService');

var express = require('express');
var app = express();
var port = 4000;

app.get('/', function (req, res) {
    return res.send('Hello world');
});

app.listen(port, function () {
    var a = new _ejemploService.Ejemplo();
    a.imprimir();

    console.log('Express server started');
});