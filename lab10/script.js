
function makeStory(){
    var loc = document.getElementById('places').value;
    var adj = document.getElementById('adjective').value;
    var  nume = document.getElementById('person').value;
    document.getElementById('story').innerHTML = nume + " a vizitat " + adj + " "+ loc;
}
document.getElementById("story-button").addEventListener("click",makeStory);


