//Add new task
const inputEl = document.getElementById("task-name");
const todoList = document.getElementById("todo-list");

function addTask () {
  const taskText = inputEl.value.trim(); //Returns the value of typed text
  if (taskText !== '') {
    const li = document.createElement("li");
    const completeBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    completeBtn.className = 'complete-btn';
    deleteBtn.className = 'delete-btn';

    li.textContent = taskText;
    completeBtn.textContent = "Complete";
    deleteBtn.textContent = "Delete";

    todoList.appendChild(li); //Appends to the unordered list in html
    li.appendChild(completeBtn); //Appends button to the list item
    li.appendChild(deleteBtn);

    completeBtn.addEventListener("click", completeTask);
    deleteBtn.addEventListener("click", deleteTask);

    inputEl.value = '';
  }
}

function completeTask(event){
  const taskComplete = event.target;
  taskComplete.classList.toggle("completed");

  if (taskComplete.textContent == "Complete") {
    taskComplete.textContent = "Completed!"
  }
  else {
    taskComplete.textContent = "Complete"
  }
}

function deleteTask (event) {
  const taskDelete = event.target.parentElement;
  todoList.removeChild(taskDelete);
}