
const input = document.getElementById('todo');
const add = document.getElementById('add');
const list = document.getElementsByClassName('todo-list');

add.addEventListener('click', () => {
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
    remove.textContent = '삭제'
    remove.addEventListener('click', () => {
        list.removeChild(listItem);
    })
    list.innerHTML = add.value;
    listItem.appendChild(check);
    listItem.appendChild(content);
    listItem.appendChild(remove);
    list.appendChild(listItem);
})
 
