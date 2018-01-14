var Dog = {
    movePixels: 10, // number of pixels
    delayMs: 50, // number of miliseconds
    dogTimer: null,
    dogWalk: function(){
        var img = document.getElementsByTagName('img')[0];
        var currentLeft = parseInt(img.style.left);
        img.style.left = (currentLeft + Dog.movePixels) + 'px';
        // reset image position to start
        if (currentLeft > (window.innerWidth-img.width)) {
            img.style.left = '0px';
        }
    },
    startDogWalk: function(){
        window.clearInterval(Dog.dogTimer);
        Dog.dogTimer = window.setInterval(Dog.dogWalk, Dog.delayMs);
        document.getElementById("start-button").disabled = true;
        out.innerHTML = "Viteza: " + Dog.movePixels*(1000/Dog.delayMs) + "px/secunda";
    },
    stopDogWalk: function(){
        window.clearInterval(Dog.dogTimer);
        document.getElementById("start-button").disabled = false;
        out.innerHTML = "Viteza: 0px/secunda ";
    },
    goFaster: function(){
        window.clearInterval(Dog.dogTimer);
        Dog.delayMs *= 0.5;
        Dog.dogTimer = window.setInterval(Dog.dogWalk, Dog.delayMs);
        out.innerHTML = "Viteza: " + Dog.movePixels*(1000/Dog.delayMs) + "px/secunda";
    },
    resetSpeed: function(){
        window.clearInterval(Dog.dogTimer);
        Dog.delayMs = 50;
        Dog.startDogWalk();
        out.innerHTML = "Viteza: " + Dog.movePixels*(1000/Dog.delayMs) + "px/secunda";
    }
};

document.getElementById("start-button").addEventListener("click",Dog.startDogWalk);
document.getElementById("stop-button").addEventListener("click",Dog.stopDogWalk);
document.getElementById("speed-button").addEventListener("click",Dog.goFaster);

var out = document.getElementById("info");

var btn = document.createElement("BUTTON");
document.getElementById("buttons").appendChild(btn);
btn.setAttribute("id","reset-button");
btn.innerHTML = "Reset speed";

document.getElementById("reset-button").addEventListener("click",Dog.resetSpeed);

window.setTimeout(function(){ alert("Sesiune expirata"); }, 30000);