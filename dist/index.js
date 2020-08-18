"use strict";

var _drawing = require("./drawing.js");

var drawing = new _drawing.Drawing(40, 20);
var canvas = document.getElementById("main");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Howdy, canvas!", 10, 50);
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.stroke();
console.log(drawing);