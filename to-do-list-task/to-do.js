let tasks = [];

// Function to add a new task
function addTask() {
  const newTaskInput = document.getElementById("new-task");
  const taskText = newTaskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a valid task.");
    return;
  }

  tasks.push({ text: taskText, finished: false });
  newTaskInput.value = "";
  displayTasks();
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

// Function to mark a task as finished
function markAsFinished(index) {
  tasks[index].finished = true;
  displayTasks();
}

// Function to display tasks
function displayTasks() {
  const todoList = document.getElementById("todo-list");
  const finishedList = document.getElementById("finished-list");

  todoList.innerHTML = "";
  finishedList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = task.text;

    if (task.finished) {
      listItem.style.textDecoration = "line-through";
      finishedList.appendChild(listItem);
    } else {
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteTask(index));
      listItem.appendChild(deleteButton);

      const finishButton = document.createElement("button");
      finishButton.textContent = "Finish";
      finishButton.addEventListener("click", () => markAsFinished(index));
      listItem.appendChild(finishButton);

      todoList.appendChild(listItem);
    }
  });
}

displayTasks();