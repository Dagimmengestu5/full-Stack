// Select Dom Elements

const todoInput = document.getElementById("todoInput")
const addBtn = document.getElementById("addBtn")
const clearButton = document.getElementById("clearCompleted")
const todoList = document.getElementById("todoList")
const emptyState = document.getElementById("emptyState")
const totalTask = document.getElementById("totalTasks")
const completedTasks = document.getElementById("completedTask")

console.log(todoInput)

// store todos in array fgfggg

let todos = [];


function renderTodos(){
  // 

  todoList.innerHTML = "";

  todos.forEach((todo,idx)=>{
    const item = createElement(todo,idx)
    todoList.appendChild(item);
  })

  
  if(todos.length === 0){
    emptyState.style.display = "block";
  }else{
    emptyState.style.display = "none"
  }

  
  // update the stats

    totalTask.textContent = `${todos.length} tasks`

    const completedCount = todos.filter(item => item.completed).length;

    completedTasks.textContent = `${completedCount} completed`



}

















function addTodo(){
    const todoText = todoInput.value.trim()
  const todObject = {
    text:todoText,
    completed:false,
    createdAt:new Date()
  }
  todos.push(todObject)
  // createElement(todObject)
  todoInput.value = "";


  renderTodos()

}

addBtn.addEventListener("click",addTodo)

todoInput.addEventListener("keypress",(e)=>{

    if(e.key === "Enter"){
        addTodo()
    }
})


function createElement(todoItem,idx){

    // console.log(todoItem.text,todoItem.createdAt)
    const listItem = document.createElement("li")
    listItem.className = `todo-item   ${todoItem.completed ? "completed" : " "}`


  // checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.checked = todoItem.completed;

  checkbox.addEventListener("change",()=>{
    todos[idx].completed = checkbox.checked
    renderTodos()
  })

  const span = document.createElement("span")
  span.textContent = todoItem.text;
  
  listItem.appendChild(checkbox)
  listItem.appendChild(span)


    // listItem.innerHTML  = `<div> <span>${todoItem.text}</span></div>`

    // console.log(listItem)sfgfdsfdsdsgsssdfdfdfdfdf
bv
   return listItem;
}



clearButton.addEventListener("click",()=>{

  console.log("clicked on clear button")
  todos = todos.filter((todo)=>{ 
    if(!todo.completed){
      console.log("hello there")
      return todo
    }
  })

   renderTodos()
})



renderTodos()

//steps to look after
//1.capture the value from our input
//2.prepare our input for the next task
//3.rendering our task
//4.after a user completes a task he/she will mark it out
//5.clear completed task
//6 update our stats dom element


// 
//array








// console.log(todoInput,addBtn,clearButton,todoList,emptyState,totalTask,completedTasks)

// Select Dom Elements

