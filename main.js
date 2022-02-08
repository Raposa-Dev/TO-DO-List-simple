
let input = document.getElementById('input');
let btn = document.getElementById('btn');
let list = document.getElementById('ul-list');

const ListArray = JSON.parse(localStorage.getItem('list_save')) || [];

function addList() {
    let inputValue = input.value;

    ListArray.push(inputValue);
    input.value = "";

    criateList();
    saveList();
};

btn.onclick = addList;

function criateList() {

    list.innerHTML = "";

    for (let value of ListArray) {

        let listElement = document.createElement("li");
        
        let linkElement = document.createElement("a");

        let listText = document.createTextNode(value);

        let removeItem = document.createTextNode('X');

        let position = ListArray.indexOf(value);

        list.appendChild(listElement);

        listElement.appendChild(listText);

        listElement.appendChild(linkElement);

        linkElement.setAttribute("href", "#");

        linkElement.setAttribute("onclick", "removeList("+ position +")");
        
        linkElement.appendChild(removeItem);
        
        
    };
};

criateList();

function removeList(position) {

    ListArray.splice(position, 1);

    criateList();
    saveList();
};

function saveList() {
    localStorage.setItem('list_save', JSON.stringify(ListArray));
};