const dodoInput = document.getElementById("todoInput")
const addBtn = document.getElementById("addBtn")
const clearCompleted = document.getElementById("clearComplited")
const todoList = document.getElementById("todoList")
const emptyStatus = document.getElementById("emptyStatus")
const totoalTasks = document.getElementById("totalTasks")
const completesTask = document.getElementById("complitedTask")

//gfd

let todos = []
function addTodo () {
    const todoText = todoInput.value.trim()
    console.log(todoText)

    const todoObject = {
        text:todoText,
        completed:false,
        createdAt:new Date()

    }
    todos.push(todoObject)
    todoInput.value = ""
    console.log(todos)
}


addBtn.addEventListener("click" ,addTodo)


function createElement(todoItem) {
    
    console.log(text,)
    
    
    const listItem = document.createElement("li")
    listItem.className = "todo-item"
    listItem.innerHTML = "<div> <span>List item <spam></div>"
    listItem;
}

console.log(todoList,addBtn,clearCompleted,todoList,emptyStatus,totoalTasks,completesTask)
console.log("hi")