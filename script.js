const input = document.getElementById('todoInput');
const add = document.getElementById('add');
const list = document.getElementById('todo-list');

add.addEventListener('click', () => {
    if (input.value.trim() === '') return;

    const listItem = document.createElement('li');

    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.addEventListener('click', () => {
        if (check.checked) {
            content.style.textDecoration = 'line-through';  
        } else {
            content.style.textDecoration = 'none'; 
        }
    });

    const content = document.createElement('span');
    content.textContent = input.value;

    const remove = document.createElement('button');
    remove.textContent = '삭제';
    remove.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    listItem.appendChild(check);
    listItem.appendChild(content);
    listItem.appendChild(remove);
    list.appendChild(listItem);

   input.value = ''; 
});

