let a = document.getElementById("menuList")
menuList.style.maxHeight = "0px"

function toggleMenu() {
    if (menuList.style.maxHeight === "0px" || menuList.style.maxHeight == "") {
        menuList.style.maxHeight = "15rem"
    } else {
        menuList.style.maxHeight = "0px"
    }
}

const taskList = document.getElementById("taskList");
const input = document.getElementById("taskInput");



addBtn.addEventListener("click", addTask);

function addTask() {
    let taskText = input.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task");
    li.setAttribute("class" , "li")

    const btns = document.createElement("div");
    btns.classList.add("btns");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
        let newTask = prompt("Edit your task:", span.textContent);
        if (newTask && newTask.trim() !== "") {
            span.textContent = newTask.trim();
        }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });


    btns.appendChild(completeBtn);
    btns.appendChild(editBtn);
    btns.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btns);

    taskList.appendChild(li);

    input.value = "";
}



