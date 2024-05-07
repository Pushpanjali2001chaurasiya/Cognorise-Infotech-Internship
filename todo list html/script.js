function addTask() {
    const input = document.getElementById('todo-input');
    if (input.value.trim() === "") {
        alert("Task cannot be empty.");
        return;
    }
    const list = document.getElementById('todo-list');
    const newItem = document.createElement("li");
    newItem.textContent = input.value;

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
        list.removeChild(newItem);
    };

    // Add edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = function () {
        const newText = prompt('Edit your task', newItem.textContent);
        if (newText !== null) newItem.firstChild.textContent = newText;
    };

    newItem.appendChild(deleteBtn);
    newItem.appendChild(editBtn);

    list.appendChild(newItem);
    input.value = ""; // Clear input field
}
