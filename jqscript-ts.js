/** <reference path="path/to/jquery.d.ts" /> */
"use strict";
var simple_mport_1 = require('./simple-mport');
var UsejQuery = (function () {
    function UsejQuery(hello) {
        console.log('constructor: ');
        console.log(hello.show());
    }
    return UsejQuery;
}());
var uq = new UsejQuery(new simple_mport_1["default"]());
exports.__esModule = true;
exports["default"] = UsejQuery;
