'use strict';

window.addEventListener('load' , ()=>{
    let divs = document.querySelectorAll('.field');

    for(let i=0; i < divs.length; i++) {
        let input = divs[i].querySelector('input');
        let span = divs[i].querySelector('span');

        input.value = Math.floor(Math.random()*256);
        span.textContent = input.value;

        divs[i].addEventListener('input', handleValueChange);
       
    }

     changeColor();
});

function changeColor() {

    let r = document.getElementById('red').value;
    let g = document.getElementById('green').value;
    let b = document.getElementById('blue').value;
    let body = document.querySelector('body');
    let cssString = "background-color: rgb(" + r +"," + g +"," + b + ");";

    body.setAttribute('style', cssString);

}

function handleValueChange(event) {
    let span = event.currentTarget.querySelector('span');
    //console.log(span);
    let newValue = event.target.value;
    span.textContent = newValue;
    changeColor();
}
