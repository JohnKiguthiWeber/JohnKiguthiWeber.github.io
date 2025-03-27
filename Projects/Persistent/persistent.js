loadList()


function loadList() {

    if (localStorage.length == 0){
        localStorage.setItem("list" , JSON.stringify([]));
    }
    else {
        let list = JSON.parse(localStorage.getItem("list"));
        for (let oldItem of list){
            const item = document.createElement('li');
            item.innerHTML = oldItem;

            document.getElementById('list').appendChild(item);
        }
    }

    if (sessionStorage.length > 0){
        itemsAdded = JSON.parse(sessionStorage.getItem("itemsAdded"))
        console.log(itemsAdded);
        document.getElementById("added").innerHTML = itemsAdded;
    }
    else {
        itemsAdded = 0;
    }
}

function addToList() { // Adds element by name in form
    let newItem = document.getElementById('input').value;
    const item = document.createElement('li');
    item.innerHTML = newItem;

    document.getElementById('list').appendChild(item);
    let list = JSON.parse(localStorage.getItem("list"));
    list.push(newItem);
    localStorage.setItem("list" , JSON.stringify(list));

    console.log(itemsAdded)
    itemsAdded += 1
    console.log(itemsAdded)
    document.getElementById("added").innerHTML = itemsAdded;
    sessionStorage.setItem("itemsAdded", itemsAdded);
}

function removeFromList() { // Removes element by name in form
    const itemToRemoveHTML = document.getElementById('input').value;
    const listParent = document.getElementById('list');
    let itemToRemove;
    for(const child of listParent.children){
        if (child.innerHTML == itemToRemoveHTML)
            itemToRemove = child;
    }

    listParent.removeChild(itemToRemove);
    let list = JSON.parse(localStorage.getItem("list"));
    let index = list.indexOf(itemToRemoveHTML);

    if (index > -1) { 
        list.splice(index, 1); 
    }

    localStorage.setItem("list" , JSON.stringify(list));

    itemsAdded -= 1
    console.log(itemsAdded)
    document.getElementById("added").innerHTML = itemsAdded;
    sessionStorage.setItem("itemsAdded", itemsAdded);
}

function clearList() {
    localStorage.clear()
    itemsAdded = 0; 
    sessionStorage.clear()
    document.getElementById('list').replaceChildren();
    document.getElementById('added').innerHTML = '0';

    loadList();
}

let bright = true;

const cookies = document.cookie.split(';');
// console.log(cookies + ' f e	');

for (let i = 0; i < cookies.length; i++){
    let cookie = cookies[i].trim();
    if (cookie.startsWith("mode" + '='))
        temp = cookie.substring("mode".length + 1);
}
console.log(temp);
if (temp == "false"){
    toggleMode();
}


function toggleMode() {
    bright = !bright;
    const allElements = document.querySelectorAll('*');
    let newColor;

    if (!bright){
        newColor = "white";
        backgroundColor = "black"
    }
    else{
        newColor = "black";
        backgroundColor = "white"
    }

    allElements.forEach(element => {
        element.style.color = newColor;
        element.style.background = backgroundColor;
    });

    let date = new Date();

    date.setTime(date.getTime() + (24 * 60 * 60 * 1000))
    let expires = "expires=" + date.toUTCString();
    let cookiestr = "mode=" + bright + "; " + expires + "; path=/";

    document.cookie = cookiestr;

    console.log(document.cookie);
}

async function getMotivation() {
    try {
        let response = await fetch("https://api.quotable.io/random");
        let data = await response.json();
        console.log(data);

        document.getElementById('motivation').innerHTML = data.content;


    } catch (error) {
        console.log(error + "  Error fetching the weather.");
    }

}

getMotivation()

// let test = { ...localStorage };
// test = JSON.parse(test);
// console.log(test);