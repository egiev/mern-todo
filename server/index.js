"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var app = (0, express_1.default)();
dotenv_1.default.config();
var port = process.env.PORT;
var a;
app.get('/', function (request, response) {
    console.log(request);
    response.send('Hello world');
});
app.listen(port);
