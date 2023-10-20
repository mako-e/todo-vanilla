var input = document.getElementById('taskInput');
var button = document.getElementById('addButton');
var taskList = document.getElementById('taskList');

button.onclick = function(){
    var inputText = input.value;
    if (inputText.trim() !== ''){   
    //Creating things for the task
    var listDiv = document.createElement('div');
    listDiv.setAttribute("class", "listDiv");
    var newTask = document.createElement('span');
    var checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");

    checkbox.id="check";
    newTask.innerText = inputText;
    listDiv.appendChild(newTask);
    listDiv.appendChild(checkbox);
    taskList.appendChild(listDiv);
    input.value = '';
}

checkbox.addEventListener('change', function(){
if (checkbox.checked == true){
    newTask.style.textDecoration="line-through";
}else{
        newTask.style.textDecoration="none";
}
});
}