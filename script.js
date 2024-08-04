document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");
  const completedList = document.getElementById("completed-list");

  function addTask(taskText) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";
    completeBtn.addEventListener("click", () => {
      listItem.classList.add("completed");
      completedList.appendChild(listItem);
      completeBtn.remove();
    });

    listItem.appendChild(completeBtn);
    todoList.appendChild(listItem);
  }

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      }
    }
  });
});
