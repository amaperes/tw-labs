function square(){
        var squareInput = document.getElementById("square-input").value;
        squareInput = squareInput * squareInput;
        document.getElementById('solution').innerHTML = squareInput;
}

function half(){
    var halfInput = document.getElementById("half-input").value;
    halfInput = halfInput / 2;
    document.getElementById('solution').innerHTML = halfInput;
}

function percent(){
    var percentInput = document.getElementById("percent1-input").value;
    var numberInput = document.getElementById("percent2-input").value;
    var out = (percentInput * numberInput) / 100;
    document.getElementById('solution').innerHTML = out;
}

function area(){
    var areaInput = document.getElementById("area-input").value;
    var out = Math.PI * areaInput * areaInput;
    document.getElementById('solution').innerHTML = out;
}

document.getElementById("square-button").addEventListener("click",square);
document.getElementById("square-input").addEventListener("keypress",function(event){
    if (event.keyCode === 13) 
        square();
});
document.getElementById("half-button").addEventListener("click",half);
document.getElementById("percent-button").addEventListener("click",percent);
document.getElementById("area-button").addEventListener("click",area);

