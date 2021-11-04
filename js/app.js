const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', toDoDelete);
toDoList.addEventListener('click', toDoDone);
toDoList.addEventListener('click', toDoModify);
filterOption.addEventListener('click', filterToDo);

function addToDo(event) {
    event.preventDefault();
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");

    if (toDoInput.value === "") {
        alert("Todo does not contain any text. Please type something.");
    } else {

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
    }
    toDoInput.value = "";
}

function toDoDone(event) {
    const item = event.target;
    if (item.classList[0] === "complete-btn") {
        const toDo = item.parentElement;
        toDo.classList.toggle('completed');
    }
}

function toDoDelete(e) {
    const deleteItm = e.target;
    if (deleteItm.classList[0] === 'trash-btn') {
        deleteItm.parentElement.remove();
    }
}

function toDoModify(e) {
    let modifyBtn = e.target;
    if (modifyBtn.classList[0] === "modify-btn") {

    }
}

function filterToDo(e) {
    const todos = document.querySelectorAll('.todo');
    todos.forEach((todo) => {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}