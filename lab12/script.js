const list = document.getElementById('list');
const formName = document.getElementById('formName');
const formUrl = document.getElementById('formUrl');
const addButton = document.getElementById('addButton');
let updateButton = document.getElementById('updateButton');


// fetch 
function getDogs() {
    fetch('http://localhost:3000/dogs')
        .then(function (response) {
            response.json().then(function (dogs) {
                appendDogsToDOM(dogs);
            });
        });
};


// post dogs
function postDog() {
    const postObject = {
        name: formName.value,
        img: formUrl.value
    }
    fetch('http://localhost:3000/dogs', {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(postObject)
    }).then(function () {
        getDogs();
        resetForm();
    });
}

// delete dog
function deleteDog(id) {
    // delete dog
    fetch(`http://localhost:3000/dogs/${id}`, {
        method: 'DELETE',
    }).then(function () {
        getDogs();
    });
}

// update dog
function updateDog(id) {
    const putObject = {
        name: formName.value,
        img: formUrl.value
    }
    fetch(`http://localhost:3000/dogs/${id}`, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(putObject)
    }).then(function () {
        getDogs();

        addButton.disabled = false;

        resetForm();
    });
}

function editDog(dog) {
    formName.value = dog.name;
    formUrl.value = dog.img;
    
    addButton.disabled = true;

    updateButton.disabled = false;

    updateButton.addEventListener('click', function () {
        updateDog(dog.id)
    });

}

// Create and append img and name DOM tags
function appendDogsToDOM(dogs) {
    // remove dog list if exist
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    // create and append tags
    for (let i = 0; i < dogs.length; i++) {

        let img = document.createElement('img');
        img.src = dogs[i].img;
  
        let name = document.createElement('span');
        name.innerText = dogs[i].name;

        let editButton = document.createElement('button')
        
            editButton.addEventListener('click', function () {
                editDog(dogs[i])
            });
            editButton.innerText = 'Edit';
        let deleteButton = document.createElement('button')
        
            deleteButton.addEventListener('click', function () {
                deleteDog(dogs[i].id)
            });
            deleteButton.innerText = 'Delete';

        let container = document.createElement('div');
        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(editButton);
        container.appendChild(deleteButton);

        list.appendChild(container);
    }
}

// reset form
function resetForm() {
    formName.value = '';
    formUrl.value = '';
}

// add event listener on add button
addButton.addEventListener('click', postDog);

// get dogs
document.getElementById('getJSON').addEventListener('click', getDogs);