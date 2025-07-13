const btnEls = document.querySelectorAll('#btn');

const btnDiv = document.querySelector('.btn-div');

btnDiv.addEventListener('click', (evt) => {
    
    let colorName = evt.target.className;
    document.body.style.backgroundColor = colorName;
    
})