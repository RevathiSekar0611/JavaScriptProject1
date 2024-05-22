
    // Array to hold the to-do items
    let todos = [];

    // Function to render the to-do items
    function renderTodos() {
      const todoList = document.getElementById('todo-list');
      todoList.innerHTML = '';

      todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        li.classList.add('todo-item');

        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = '❌';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deleteItem(index);

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
      });
    }

    // Function to add a new item
    function addItem() {
      const input = document.getElementById('todo-input');
      const value = input.value.trim();

      if (value !== '') {
        todos.push(value);
        input.value = '';
        renderTodos();
      }
    }

    // Function to delete an item
    function deleteItem(index) {
      todos.splice(index, 1);
      renderTodos();
    }

    // Initial rendering
    renderTodos();