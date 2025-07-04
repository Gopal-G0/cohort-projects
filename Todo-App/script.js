let todos = [];

function addTodo() {
    todos.push({
        title : document.querySelector(".input-btn").value
    });
    renderTodo();

}  

    function createTodoComponent(todo) {
        const divEl = document.createElement("div");
        const spanEl = document.createElement("span");
        spanEl.innerHTML = todo.title;
        const buttonEl = document.createElement("button");
        buttonEl.innerHTML = "Delete";
        divEl.append(spanEl);
        divEl.append(buttonEl);

        return divEl;
    }

    // React
    function renderTodo() {
        document.querySelector(".todos").innerHTML = "";
        for(let i = 0;i < todos.length;i++) {
            const divEl = createTodoComponent(todos[i]);
            document.querySelector(".todos").appendChild(divEl);
        }
    }
