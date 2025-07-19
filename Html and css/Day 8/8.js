const dodoInput = document.getElementById("todoInput")
const addBtn = document.getElementById("addBtn")
const clearCompleted = document.getElementById("clearComplited")
const todoList = document.getElementById("todoList")
const emptyStatus = document.getElementById("emptyStatus")
const totoalTasks = document.getElementById("totalTasks")
const completesTask = document.getElementById("complitedTask")

//gfdhhgghfggfgfgf

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
//ff111dffdvcadds

addBtn.addEventListener("click" ,addTodo)
todoInput.addEventListener("keypress",(e)=>{
    if( e.key === "Enter"){
        addTodo()
    }
})

function createElement(todoItem) {
    console.log(todoItem,text,todoItem.createdAt)
    
    
    const listItem = document.createElement("li")
    listItem.className = `todo-item ${todoItem.completed ? "complited" : " "}`
    listItem.innerHTML = `<div> <span>${todoItem.text}<spam></div>`
    return listItem;
}

console.log(todoList,addBtn,clearCompleted,todoList,emptyStatus,totoalTasks,completesTask)
console.log("hi")