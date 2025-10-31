console.log("Hello, World!");

/// local storage for todo items
let todos = [];

function validateForm(todo, date) {
    if (todo.trim() === "" || date.trim() === "") {
        return false;
    }
    return true;
}

function addTodo() {
    const todoInput = document.getElementById('todo-input').value;
    const todoDate = document.getElementById('todo-date').value;

   if (!validateForm(todoInput, todoDate)) {
       alert("Form validation failed, please check your inputs.");
   } else {
    
       // Add to local array
       todos.push({ task: todoInput, dueDate: todoDate });

       renderTodos();
       
   }
}

function deleteTodo() {
    const todoList = document.getElementById('todo-list');
    todos = [];
    todoList.innerHTML = '';

    renderTodos();
}

function filterTodo() {
    const todoList = document.getElementById('todo-list');
    
    // Clear existing list
    todoList.innerHTML = '';    

}

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    
    // Clear existing list
    todoList.innerHTML = '';

    // Render each todo item
    todos.forEach((todo, index) => {
        todoList.innerHTML += `<li>
            <span>${todo.task} - ${todo.dueDate}</span>
        </li>`;
    }); 
}