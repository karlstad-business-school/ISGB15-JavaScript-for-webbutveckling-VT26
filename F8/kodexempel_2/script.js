'use strict';

window.addEventListener('load' ,renderPage);

function renderPage() {
    let table = document.querySelector('body>table.table-bordered');

    let counter=0;
    for(let i = 0; i<=10; i++) {

        //Skapa rader
        let tr = document.createElement('tr');

            for(let j=0;j<11;j++) {
                let td = document.createElement('td');
                tr.appendChild(td);
                let text = document.createTextNode(counter);
                td.appendChild(text);

                counter++;

            }

        table.appendChild(tr);

    }

    document.querySelector('body').addEventListener('click', bodyClicked);
    
}

function bodyClicked(e) {

    console.log(e.target);
    if(e.target.tagName === 'TD') {
        e.target.style.backgroundColor = 'red';
    }

    if(e.target.parentNode.tagName === 'TR') {
        console.log("fxvdfg");
        e.target.parentNode.remove();
    }
    


}