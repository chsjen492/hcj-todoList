const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('add');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
    if (todoInput.value.trim() === '') return;

    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            content.style.textDecoration = 'line-through';  
        } else {
            content.style.textDecoration = 'none'; 
        }
    });

    const todoContent = document.createElement('span');
    todoContent.textContent = todoInput.value;

    const removeButton = document.createElement('button');
    removeButton.textContent = '삭제';
    removeButton.addEventListener('click', () => {
        todoList.removeChild(listItem);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(todoContent);
    listItem.appendChild(removeButton);
    todoList.appendChild(listItem);

   todoInput.value = ''; 
});

