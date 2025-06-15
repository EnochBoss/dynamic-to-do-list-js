document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        // Load existing tasks
        storedTasks.forEach(text => addTask(text, false));
    }
    
    function addTask(taskText, save = true) {
        if (save) {
            taskText = taskInput.value.trim();
        }
        
        if(taskText === "") {
            alert("Enter a task!")
            return;
        } 
        
        const li = document.createElement('li');
        li.textContent = taskText + ' ';

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener("click", function() {
            this.parentNode.remove();

            if (save) {
                const arr = JSON.parse(localStorage.getItem("tasks")) || [];
                const filtered = arr.filter(t => t !== taskText);
                localStorage.setItem("tasks", JSON.stringify(filtered));
            }
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
        taskInput.value = "";
        }
    };

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(){
        if(event.key === "Enter"){
            addTask();
        }
    });
    document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    });

});