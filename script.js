const form = document.getElementById('todo-form')
const input = document.getElementById('todo-input')
const list = document.getElementById('todo-list')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    //
    const tarefa = input.value;

    if (tarefa.trim() !== '') {
        list.innerHTML += `<li>${tarefa}</li>`
        input.value = '';
    } else {
        alert("Por favor, digite uma tarefa válida!");
    }
})