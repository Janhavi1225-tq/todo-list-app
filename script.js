function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-btn" onclick="toggleComplete(this)">Complete</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    document.getElementById('taskList').appendChild(li);
    taskInput.value = "";
}

function toggleComplete(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
