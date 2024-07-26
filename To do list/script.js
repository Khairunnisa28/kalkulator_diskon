const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const taskList = document.getElementById("taskList");

// Tambahkan tugas baru
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${taskText}
        <span class="delete">Hapus</span>
    `;

    taskList.appendChild(listItem);
    taskInput.value = "";

    listItem.querySelector(".delete").addEventListener("click", function () {
        if (confirm("Apakah Anda yakin menghapus?")) {
            taskList.removeChild(listItem);
        }
    });
}

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
