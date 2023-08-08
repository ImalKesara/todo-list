const addform = document.querySelector('.form-add');
const todolist = document.querySelector('.list-group');
const search = document.querySelector('.form-one');

const generateTem = add => {

    const html = `
    <li class="list-group-item">
        <span> ${add}</span>
        <i class='del bx bx-trash-alt'></i>
     </li>`;

    todolist.innerHTML += html;
}



addform.addEventListener('submit', event => {
    event.preventDefault();
    const add = addform.ADD.value;
    if (add.length) {
        generateTem(add);
        addform.reset();
    }


});

todolist.addEventListener('click', (event) => {
    if (event.target.classList.contains('del')) {
        event.target.parentElement.remove();
    }
});


const filterTodos = (term) => {
    Array.from(todolist.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo) => todo.classList.add('filled'));

    Array.from(todolist.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo) => todo.classList.remove('filled'));
};

search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
});