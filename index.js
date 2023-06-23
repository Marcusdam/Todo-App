 
const push = document.getElementById("push");
const task = document.getElementById("task");


function AddTask() {
    if (taskInput.value == ""){
        alert("Please Enter Your task")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = taskInput.value;
        task.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    taskInput.value = "";
    saveData();
   
}

task.addEventListener("click", function (e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        e.target.classList.toggle("unchecked");
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", task.innerHTML);
    
}
function showTask() {
    task.innerHTML = localStorage.getItem("data");

    
}
showTask();