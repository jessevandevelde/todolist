let ToDoItem;

document.getElementById("submit").onclick = function() {
    ToDoItem = document.getElementById("task").value;
    console.log(ToDoItem);
    //add the item to the list
    document.getElementById("tasks").innerHTML += "<li>" + ToDoItem + "</li>";
    //clear the input field
    document.getElementById("task").value = "";
}

document.getElementById("tasks").addEventListener("click"), function(event) {
    if (document.elementFromPoint === "li") {
        event.target.TextDecoration = "line-through";
    }
}   

