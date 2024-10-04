// Add task function
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const taskList = document.getElementById('task-list');
      const li = document.createElement('li');
      
      li.innerHTML = `
        <input type="text" value="${taskText}" readonly />
        <div class="actions">
          <button onclick="editTask(this)">Edit</button>
          <button onclick="deleteTask(this)">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
  
  // Edit task function
  function editTask(button) {
    const taskInput = button.parentElement.previousElementSibling;
    if (button.textContent === "Edit") {
      taskInput.removeAttribute("readonly");
      taskInput.focus();
      button.textContent = "Save";
    } else {
      taskInput.setAttribute("readonly", true);
      button.textContent = "Edit";
    }
  }
  
  // Delete task function
  function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
  }
  
  // Delete all tasks function
  function deleteAll() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = "";
  }
  