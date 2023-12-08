/*
Filename: ComplexCode.js
Content: This code generates a complex pattern of concentric circles using HTML5 canvas and JavaScript.
*/

// Initializing the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Setting canvas properties
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Constants
var NUM_CIRCLES = 15;
var RADIUS_INCREMENT = 10;
var ANGLE_INCREMENT = 0.1;

// Initial values
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 0;

// Colors
var colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];

// Function to draw a circle
function drawCircle(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = color;
  ctx.stroke();
}

// Function to animate the circles
function animateCircles() {
  for (var i = 0; i < NUM_CIRCLES; i++) {
    var angle = i * ANGLE_INCREMENT;
    var x = centerX + Math.cos(angle) * radius;
    var y = centerY + Math.sin(angle) * radius;
    drawCircle(x, y, radius, colors[i % colors.length]);
  }
  radius += RADIUS_INCREMENT;
  
  // Repeat the animation
  if (radius < Math.min(canvas.width, canvas.height) / 2) {
    requestAnimationFrame(animateCircles);
  }
}

animateCircles();