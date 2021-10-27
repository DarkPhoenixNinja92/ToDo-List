const listInput = document.querySelector(".list-add");
const buttonAdd = document.querySelector(".button");
const list = document.querySelector(".list").firstElementChild;
console.log(list.innerHTML);

let addToList = () => {
    const newLi = document.createElement("li");
    const liContent = document.createTextNode(listInput.value);
    newLi.appendChild(liContent);
    list.appendChild(newLi);

    const modifyBtn = document.createElement("button");
    const modifyBtnContent = document.createTextNode("Modify");
    modifyBtn.appendChild(modifyBtnContent);
    newLi.appendChild(modifyBtn);

    const deleteBtn = document.createElement("button");
    const deleteBtnContent = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteBtnContent);
    newLi.appendChild(deleteBtn);
}

buttonAdd.addEventListener('click', addToList);