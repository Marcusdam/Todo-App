const inputField = document.getElementById("Input");
const Task = document.getElementById("my-task");

function AddTask() {
    if (inputField.value == ""){
        alert("Please Enter Your task")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputField.value;
        Task.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    inputField.value = "";
    saveData();
   
}

Task.addEventListener("click", function (e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", Task.innerHTML);
    
}
function showTask() {
    Task.innerHTML = localStorage.getItem("data"); 
}
showTask();
