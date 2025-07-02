function addTodo() {
    let divEl = document.createElement("div");
    let parentEl = document.querySelector("body");
    divEl.innerHTML = document.querySelector(".input").value;
    parentEl.appendChild(divEl); 
}