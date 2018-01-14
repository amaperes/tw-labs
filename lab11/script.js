
var movePixels = 10; // number of pixels
var delayMs = 50; // number of miliseconds
var dogTimer = null;

// Move the image on screen with 10px
function dogWalk() {
    var img = document.getElementsByTagName('img')[0];
    var currentLeft = parseInt(img.style.left);
    img.style.left = (currentLeft + movePixels) + 'px';
    // reset image position to start
    if (currentLeft > (window.innerWidth-img.width)) {
        img.style.left = '0px';
    }
}

// Call dogWalk function every 50 ms
function startDogWalk() {
    window.clearInterval(dogTimer);
    dogTimer = window.setInterval(dogWalk, delayMs);
    startBtn.disabled = true;
    out.innerHTML = "Viteza: " + movePixels*(1000/delayMs) + "px/secunda";
}

function stopDogWalk(){
    window.clearInterval(dogTimer);
    startBtn.disabled = false;
    out.innerHTML = "Viteza: 0px/secunda ";
}

function goFaster(){
    window.clearInterval(dogTimer);
    delayMs *= 0.5;
    dogTimer = window.setInterval(dogWalk, delayMs);
    out.innerHTML = "Viteza: " + movePixels*(1000/delayMs) + "px/secunda";

}

var startBtn = document.getElementById("start-button");
startBtn.addEventListener("click",startDogWalk);

var stopBtn = document.getElementById("stop-button");
stopBtn.addEventListener("click",stopDogWalk);

var speedBtn = document.getElementById("speed-button");
speedBtn.addEventListener("click",goFaster);

var out = document.getElementById("info");

var btn = document.createElement("BUTTON");
document.getElementById("buttons").appendChild(btn);
btn.setAttribute("id","reset-button");
btn.innerHTML = "Reset speed";

document.getElementById("reset-button").addEventListener("click",function(){
    window.clearInterval(dogTimer);
    delayMs = 50;
    startDogWalk();
    out.innerHTML = "Viteza: " + movePixels*(1000/delayMs) + "px/secunda";
});

window.setTimeout(function(){ alert("Sesiune expirata"); }, 30000);