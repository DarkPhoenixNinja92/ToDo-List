const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');

toDoButton.addEventListener('click', addToDo);

function addToDo(event) {
    event.preventDefault();
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");

    const newToDo = document.createElement("li");
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add("todo-item");
    toDoDiv.appendChild(newToDo);

    const toDoCheckBtn = document.createElement("button");
    toDoCheckBtn.innerHTML = "<i class='fas fa-check-square'></i>"
    toDoCheckBtn.classList.add("complete-btn");
    toDoDiv.appendChild(toDoCheckBtn);

    const toDoModifyBtn = document.createElement("button");
    toDoModifyBtn.innerHTML = "<i class='fas fa-edit'></i>";
    toDoModifyBtn.classList.add("modify-btn");
    toDoDiv.appendChild(toDoModifyBtn);

    const toDoDeleteBtn = document.createElement("button");
    toDoDeleteBtn.innerHTML = "<i class='fas fa-trash'></i>";
    toDoDeleteBtn.classList.add("trash-btn");
    toDoDiv.appendChild(toDoDeleteBtn);

    toDoList.appendChild(toDoDiv);

    toDoInput.value = "";
}

function toDoDone(event) {
    event.preventDefault();
    const completedBtn = document.querySelector(".complete-btn");
    completedBtn.style.textDecoration = "line-through";
}

function toDoDelete() {
    const deleteBtn = document.querySelector(".trash-btn");
    deleteBtn.parentNode.removeChild(deleteBtn);
}

function toDoModify() {
    const modifyBtn = document.querySelector(".modify-btn");
}