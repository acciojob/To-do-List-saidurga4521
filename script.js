 document.addEventListener("DOMContentLoaded", () => {
        const inputEl = document.getElementById("newTodoInput");
        const buttonEl = document.getElementById("addTodoBtn");
        const olEl = document.getElementById("todoList");

        buttonEl.addEventListener("click", () => {
            const task = inputEl.value.trim();

            if (task !== "") {
                const li = document.createElement("li"); // ✅ Create <li> element
                li.textContent = task; // ✅ Set text content
                olEl.appendChild(li); // ✅ Append to <ol>
                inputEl.value = ""; // ✅ Clear input field
            } else {
                alert("Please enter a task.");
            }
        });
    });

