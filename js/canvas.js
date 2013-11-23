/*
var canvas = document.getElementById("myCanvas");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var ctx = canvas.getContext("2d");
var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

// That's how you define the value of a pixel //
function drawPixel (x, y, r, g, b, a) {
    var index = (x + y * canvasWidth) * 4;

    canvasData.data[index] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}

// That's how you update the canvas, so that your //
// modification are taken in consideration //
function updateCanvas() {
    'use strict';
    ctx.putImageData(canvasData, 0, 0);
}

    ctx.fillRect(50, 25, 150, 150);
	ctx.fillStyle = "a68064";
    console.log(ctx);
	drawPixel(1, 1, 255, 0, 0, 255);
	drawPixel(1, 2, 255, 0, 0, 255);
	drawPixel(1, 3, 255, 0, 0, 255);
	updateCanvas();
*/

var canvas = document.getElementById("myCanvas");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var ctx = canvas.getContext("2d");
var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

ctx.fillStyle = "a68064";
ctx.fillRect(200, 150, 800, 600);

ctx.fillStyle = "fff";
ctx.beginPath();
ctx.arc(240, 170, 3, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();
