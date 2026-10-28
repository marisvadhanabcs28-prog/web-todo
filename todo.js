
function addTask() {
    let input = document.getElementById("task");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let text = document.createElement("span");
    text.textContent = " " + task + " ";

    checkbox.onchange = function() {
        text.classList.toggle("completed", checkbox.checked);
    };

    let del = document.createElement("button");
    del.textContent = "Delete";

    del.onclick = function() {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(del);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
