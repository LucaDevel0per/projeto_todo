const form = document.getElementById('todo-form')
const input = document.getElementById('todo-input')
const list = document.getElementById('todo-list')

let tarefas = []

function renderizarTarefas() {
    list.innerHTML = '';

    tarefas.forEach((tarefa, idx) => {
        const li = document.createElement('li')
        li.textContent = tarefa;

        list.appendChild(li)
    })
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    //
    const tarefa = input.value;

    if (tarefa.trim() !== '') {
        // list.innerHTML += `<li>${tarefa}</li>`
        // input.value = '';
        tarefas.push(tarefa);
    input.value = '';
    renderizarTarefas();

    } else {
        alert("Por favor, digite uma tarefa válida!");
    }
})