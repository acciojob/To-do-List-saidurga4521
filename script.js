const inputEl = document.getElementById("newTodoInput");
const buttonEl = document.getElementById("addTodoBtn");
const olEl = document.getElementById("todoList");

// Add event listener to the button
buttonEl.addEventListener("click", () => {
    const task = inputEl.value.trim(); // Trim to remove extra spaces

    if (task !== "") {
        const li = document.createElement("li"); // Create a new <li> element
        li.textContent = task; // Set text content
        olEl.appendChild(li); // Append <li> to <ol>
        inputEl.value = ""; // Clear input field after adding
    }
});
    
