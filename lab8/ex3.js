var blackFridayCart = {
    telefon: "350",
    consola: "250",
    televizor: "450",
    iepurasPlus: "10.60",
    cercei: "20.34",
    geanta: "22.36"
};

function getCartValue(blackFridayCart){
    console.clear();
    var sum = 0.0;
    for (k in blackFridayCart){
        sum += parseFloat(blackFridayCart[k]);
    }   
    console.log(Math.floor(sum));
}