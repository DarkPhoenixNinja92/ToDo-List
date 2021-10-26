const getList = document.querySelector(".list");
const listAdd = document.querySelector(".list-add");
const button = document.querySelector(".button");
const modify = document.querySelector(".modify-btn");
const deleteBtn = document.querySelector(".delete-btn");

let createListItem = () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("list-itm");
    getList.appendChild(newDiv);

    const newP = document.createElement("p");
    newP.classList.add("list-content");
    const pContent = document.createTextNode(listAdd.value);
    newP.appendChild(pContent);
    newDiv.appendChild(newP);
    listAdd.value = '';

    const btnModify = document.createElement("button");
    const btnModifyContent = document.createTextNode("Modify Content");
    btnModify.appendChild(btnModifyContent);
    btnModify.classList.add("modify-btn");
    newDiv.appendChild(btnModify);

    const btnDelete = document.createElement("button");
    const btnDeleteContent = document.createTextNode("Delete");
    btnDelete.appendChild(btnDeleteContent);
    btnDelete.classList.add("delete-btn");
    newDiv.appendChild(btnDelete);
}

let deleteListItem = () => {
    document.querySelector(".delete-btn").parentElement.outerHTML = "";
}

button.addEventListener('click', createListItem);