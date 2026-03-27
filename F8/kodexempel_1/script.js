'use strict';

window.addEventListener('load', ()=> {
	
	//renderPage();
	//renderPageInnerHTML();
	renderPageTheRightWay();
});

function renderPage() {
	
	//Hela sidan måste skapas upp... jobbigt	
	document.writeln('<main>');
	document.writeln('<h1>');
	document.writeln('Html skapad vid load');
	document.writeln('</h1>');
	document.writeln('<button class="btn btn-primary" onclick="btnClick();">Push!</button>');
	document.writeln('</main>');
	
	
}

function renderPageInnerHTML() {
	
	let body = document.querySelector('body');
	
	body.innerHTML = '<main><h1>Html skapad vid load</h1><button class="btn btn-primary">Push!</button></main>';
	
	//Lyssnare?
}

function renderPageTheRightWay() {
	let body = document.querySelector('body');

	let main = document.createElement('main');
	let h1 = document.createElement('h1');
	let button = document.createElement('button');

	let textnode = document.createTextNode('HTML skapad vid load');

	h1.appendChild(textnode);

	let knapptext = document.createTextNode('PUSH!');
	button.appendChild(knapptext);

	body.appendChild(main);
	main.appendChild(h1);
	main.appendChild(button);

	button.classList.add('btn', 'btn-primary');
	button.addEventListener('click', ()=> {
		alert('dfgdfgfg');
	});

	//function() {}




	
}