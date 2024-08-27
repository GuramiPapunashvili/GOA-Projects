function addTask() {
    let toAdd = document.getElementById('Task');
    let Tasks = document.getElementById('everyTask');   
    let taskStatus = false  

    let newTask = document.createElement('div');
    let deleteButton = document.createElement('button');
    let markAsDone = document.createElement('button');

    deleteButton.innerHTML = 'Delete Task';
    markAsDone.innerHTML = 'Mark As Done';
    newTask.innerText = toAdd.value;

    if (newTask.innerHTML == ''){
        alert("The task is empty")
    }else {
        Tasks.appendChild(newTask);   
        Tasks.appendChild(deleteButton);
        Tasks.appendChild(markAsDone)
    }

    deleteButton.onclick = function(){
        newTask.remove();
        deleteButton.remove();
        markAsDone.remove()
    }

    markAsDone.onclick = function() {  
        if (taskStatus == true) {
            newTask.style.backgroundColor = 'Red'
            markAsDone.innerHTML = 'Mark As Done'
            taskStatus = false
        } else {
            newTask.style.backgroundColor = 'Green'
            markAsDone.innerHTML = 'Mark As Undone'
            taskStatus = true
        }    
    }

}

function deleteAll() {
    let Tasks = document.getElementById('everyTask')
    Tasks.innerHTML = ''
}
