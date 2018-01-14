
var film = [
    {titlu:"Deuce Bigalow",durata:120,actori:["gdgdgd","jiuji","ffr"],img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAX1XyGEWBOGSGBm775kfUsb7UCboNC5hvgE3n_J8NLwaQoePL"},
    {titlu:"Christmas Miracle",durata:100,actori:["ljlu","gdgdgdgd","ffr"],img:"https://resizing.flixster.com/ajD7JNDqt9J5eGVmlfMwWonCbKU=/206x305/v1.bTsxMTE5NzkzMjtqOzE3NjM0OzEyMDA7MTUzNjsyMDQ4"},
    {titlu:"50 Shades Darker",durata:130,actori:["ljlu","jiuji","gdgdfgdfgdfgssdg"],img:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5NTk0Njg2N15BMl5BanBnXkFtZTgwNzk5Nzk3MDI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
];

for(var i = 0 ; i < film.length ; i++){
     var element = document.createElement("P");
     var elem = document.createTextNode(film[i].titlu);
     element.appendChild(elem);
     document.getElementsByTagName('body')[0].appendChild(element);
} ;

    var ulDOM = document.createElement("UL");
    document.querySelector('body').appendChild(ulDOM);
    for (var i = 0 ; i < film.length ; i++){
        var liDOM = document.createElement("LI");
        document.querySelector('ul').appendChild(liDOM);
        var nodeDOM = document.createTextNode("FILM: " + film[i].titlu + " , DURATA:" + film[i].durata + " , ACTORI:" + film[i].actori + " , IMAGINE: ");
        liDOM.appendChild(nodeDOM);
        var x = document.createElement("IMG");
            x.setAttribute("src", film[i].img);
            x.setAttribute("alt","");
            x.setAttribute("width" , 200);
            x.setAttribute("height" , 250);
        liDOM.appendChild(x);
        document.querySelector('ul').appendChild(liDOM);
    }
    