document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        let taskText = taskInput.value.trim();
        
        if(taskText === "") {
            alert("Enter a task!")
        } else{
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.classList.add("remove-btn");
            removeBtn.addEventListener("click", function() {
                this.parentNode.remove();
            });

            li.appendChild(removeBtn);
            taskList.appendChild(li);

            taskInput.value = "";
        }
    };

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(){
        if(event.key === "Enter"){
            addTask();
        }
    });
    document.addEventListener("DOMContentLoaded", addTask);

});