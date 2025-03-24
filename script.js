
let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const categoryInput = document.getElementById("categoryInput");
    const description = taskInput.value.trim();
    // trim() i used it to removes extra spaces from the input
    
    if (description === "") 
      return  alert("Please Enter a Task")  ;  	
       
    const newTask = {
        description: description,
        category: categoryInput.value,
        dateAdded: new Date(),
        completed: false,  // means the task is not done yet.
    };
   
  
    tasks.push(newTask);  //adds the task to our list 
    taskInput.value = ""; // Clear input field
    displayTasks();   //updates the list so the new task appears on the screen
}



function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = " "; //null      //it clears it before adding new tasks. // if  taskList.innerHTML = " ";is not 
     //there what ever we input it will add twice
    
    
     tasks.forEach((task, index) => {     //task represents the current task, and index is its position in the array.
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        if (task.completed) taskElement.classList.add("completed");
  

        taskElement.innerHTML = `
            ${task.description} (${task.category}) - ${task.dateAdded.toDateString()}
            <input type="checkbox" onchange="toggleComplete(${index})" ${task.completed ? "checked" : ""}>
        `;
        //The toggleComplete Function - Marking a Task as Done

        taskList.appendChild(taskElement);
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}


//means the task is not done yet.
// 	tasks[index] gets the specific task from the array.
// 	!tasks[index].completed flips its value:
// 	If it was false, it becomes true (completed).
// 	If it was true, it becomes false (not completed).
