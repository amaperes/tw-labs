function multiplicator(element) {
    return 2 * element;
}

Array.prototype.myMap = function(callback) {
    arr = [];
    for (var i = 0; i < this.length; i++)
        arr.push(callback(this[i]));
    return arr;
};

function ex4(){
    console.clear();
    console.log([1,2,3].myMap(multiplicator));
    console.log([1,2,3].map(multiplicator));
};