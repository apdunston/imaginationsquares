import {Drawing} from "./drawing.js";

let drawing = new Drawing(40, 20);

let canvas = document.getElementById("main");

let ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Howdy, canvas!", 10, 50); 

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.stroke(); 

console.log(drawing);