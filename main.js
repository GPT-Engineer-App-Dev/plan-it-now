document.getElementById("new-task").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");
  const task = taskInput.value.trim();

  if (task !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <span class="task-text">${task}</span>
            <button class="text-green-500 ml-2" onclick="toggleTaskCompletion(this)">
                <i class="fas fa-check"></i>
            </button>
            <button class="text-red-500 ml-2" onclick="removeTask(this)">
                <i class="fas fa-trash"></i>
            </button>
        `;
    taskList.appendChild(listItem);
    taskInput.value = ""; // Clear input after adding
  }
}

function toggleTaskCompletion(button) {
  const taskText = button.parentNode.querySelector(".task-text");
  taskText.classList.toggle("line-through");
}

function removeTask(button) {
  const taskItem = button.parentNode;
  taskItem.remove();
}
