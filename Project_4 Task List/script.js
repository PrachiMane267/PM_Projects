// Get elements from the DOM
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const filterAll = document.getElementById('all');
const filterActive = document.getElementById('active');
const filterCompleted = document.getElementById('completed');

let tasks = [];

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const newTask = {
      text: taskText,
      completed: false
    };
    tasks.push(newTask);
    taskInput.value = ''; // Clear the input field
    renderTasks();
  }
}

// Render tasks function
function renderTasks(filter = 'all') {
  taskList.innerHTML = ''; // Clear the task list
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // For 'all'
  });

  filteredTasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.classList.toggle('completed', task.completed);

    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button onclick="toggleTaskCompletion(${index})">Complete</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// Toggle task completion
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Delete task function
function deleteTask(index) {
  tasks.splice(index, 1); // Remove the task from the array
  renderTasks();
}

// Filter tasks based on completion status
filterAll.addEventListener('click', () => renderTasks('all'));
filterActive.addEventListener('click', () => renderTasks('active'));
filterCompleted.addEventListener('click', () => renderTasks('completed'));

// Add task when button is clicked
addTaskBtn.addEventListener('click', addTask);

// Add task when Enter key is pressed
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Initial render
renderTasks();
