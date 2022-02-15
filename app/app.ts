import {ctx, canvas} from './canvas';
import {makeButton} from './controls';


function drawCircle (x:number, y:number) {
  ctx.beginPath()
  ctx.arc(x,y,5,0,Math.PI*2)
  ctx.fill()
}

function drawBG(color) {
ctx.fillStyle=color;
ctx.rect(0, 0, 600, 600);
ctx.fill();
}





window.addEventListener("keypress", function(event){
  if (event.key == "d") {
    drawBG("#333");
  } else if (event.key == "r") {
    drawBG("red");
  } else if (event.key == "b") {
    drawBG ("blue"); 
  } else if (event.key == "p") {
    drawBG ("pink");
  } else if (event.key == "y") {
    drawBG ("yellow");
  } else if (event.key == "g") {
    drawBG ("green");
  } else if (event.key == "w") {
    drawBG ("white");
  }
});

canvas.addEventListener(
  "mousemove",
  function(event) {
    if (event.buttons==1){
      drawCircle(event.offsetX,event.offsetY)
    }
  }
)

let clearButton = makeButton('Clear');
clearButton.addEventListener(
  "click",
  function () {
    ctx.clearRect(
      0,0,canvas.width,canvas.height
    )
  }
)


let redButton = document.querySelector("#red");

redButton.addEventListener("click", function() {
  ctx.fillStyle = "red";
});

canvas.addEventListener("click", function (event) {
  drawCircle(event.offsetX, event.offsetY);
});


let orangeButton = document.querySelector("#orange");

orangeButton.addEventListener("click", function() {
  ctx.fillStyle = "orange";
});

canvas.addEventListener("click", function (event) {
  drawCircle(event.offsetX, event.offsetY);
});


let yellowButton = document.querySelector("#yellow");

yellowButton.addEventListener("click", function() {
  ctx.fillStyle = "yellow";
});

canvas.addEventListener("click", function (event) {
  drawCircle(event.offsetX, event.offsetY);
});


let greenButton = document.querySelector("#green");

greenButton.addEventListener("click", function() {
  ctx.fillStyle = "green";
});

canvas.addEventListener("click", function (event) {
  drawCircle(event.offsetX, event.offsetY);
});


let blueButton = document.querySelector("#blue");

blueButton.addEventListener("click", function() {
  ctx.fillStyle = "blue";
});

canvas.addEventListener("click", function (event) {
  drawCircle(event.offsetX, event.offsetY);
});


let pinkButton = document.querySelector("#pink");

pinkButton.addEventListener("click", function() {
  ctx.fillStyle = "pink";
});

canvas.addEventListener("click", function (event) {
  drawCircle(event.offsetX, event.offsetY);
});