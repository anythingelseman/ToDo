var addButton = document.getElementById("add-button");
    addButton.addEventListener("click", addToDoItem);



var clearButton = document.getElementById("clear-completed-button");
clearButton.addEventListener("click", clearCompletedToDoItems);

var emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyList);

var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveList);

function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    document.getElementById("todo-list").appendChild(toDoItem);
    toDoItem.addEventListener("dblclick",toggleToDoItemState);
}
function addToDoItem() {
    var itemText = document.getElementById("todo-entry-box").value;
    newToDoItem(itemText, false);
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    }
    else {
        this.classList.add("completed")
    }
}

function clearCompletedToDoItems() {
    var completedItems = document.getElementById("todo-list").getElementsByClassName("completed");
    while (completedItems.length>0){
        completedItems.item(0).remove();
    }
}

function emptyList() {
    var toDoItems = document.getElementById("todo-list").children;
    while (toDoItems.length>0) {
        toDoItems.item(0).remove();
    }
}

function saveList() {
    var toDos = []
    var toDoList = document.getElementById("todo-list")
    for (var i = 0; i < toDoList.children.length; i ++) {
        var toDo = toDoList.children.item(i);
        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };
        toDos.push(toDoInfo);
    }
    localStorage.setItem("toDos",JSON.stringify(toDos));
}

function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i=0; i< toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}

window.onload=loadList();
