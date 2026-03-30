'use strict';
let timerData = {
    timerId : 0
};

/*
    Uppgiften består ava att skriva koden för följande:

    1. När DOM:en är byggd kör en anonym callback-funktion där:

    2. En lyssnare på submit-händelsen kör en anonym callback-funktion och validerar indata i formuläret.
    Använd undantagshantering och kontroller så att inga textrutorna inte får vara tomma. Om så är fallet 
    felmeddelande till användaren och markören i textrutan som genererade undantaget.

    3. En lyssnare på reset-händelsen kör en anonym callback-funktion som återställer de DOM-objekt vi har 
    ändrat på utanför formuläret.

    4. En lyssnare för indata-händelsen (på textarean) som visar antalet tecken i lämpligt DOM-objekt.

    5. En lyssnare för klick-händelsen på div-elementet med id=container. När användaren klickar på den
    kontrollera om händelsen inträffade på ett p-element och om så är fallet slumpa ett tal och placera
    resultatet i p-elementet som genererade händelsen.

    6. En lyssnare för klick-händelsen på knappen med id=start. När användaren klickat på knappen starta en 
    timer som anropar en anonym callback-funktion en gång i sekunden där du adderar ett p-element i 
    elementet med id=containder och texten ska bestå av siffran som följer efter föregående p-element.

    7. En lyssnare för klick-händelsen på knappen med id=stop. När användaren klickat på knappen avsluta 
    timern och återställ attributet i timerData-objektet.

    8. Avsluta med att sätta markören i första textelementet i gränssnittet.
*/


window.addEventListener('load', function() {

    window.document.querySelector('#container').addEventListener('click', function( e ) {

        console.log( e.target, e.currentTarget, e.target.textContent );
        console.log( e.target.tagName, e.target.nodeName)

        if( e.target.tagName === 'P') { //Finns också nodeName
            e.target.textContent = Math.random();
        }

    });


    document.querySelector('#start').addEventListener('click', function() {

    if( timerData.timerId === 0) {
    
        timerData.timerId = setInterval(function() {
    
            let container = document.querySelector('#container');
            let antal = container.querySelectorAll('p').length;

            container.innerHTML += "<p>" + (antal + 1) + "</p>";
    
            //console.log(Date.now());
        }, 1000);
    
    }


    });

    document.querySelector('#stop').addEventListener('click', function() {

        if( timerData.timerId !== 0){
            clearInterval( timerData.timerId);
            timerData.timerId = 0;
        }
    });

    document.querySelector('body').addEventListener('click', demoFunk1);

    //Demostration av this rad 78-105
    document.querySelector('body').addEventListener('click', function() {
       console.log('this med callback function är: ', this);
    });

    document.querySelector('body').addEventListener('click', ()=> {
        console.log('this med callback fat arrow är: ', this);
    });

    
});

function demoFunk1() {
    console.log('this i demoFunk1 är: ', this);
}

function demoFunk2() {
    console.log('this i demoFunk2 är: ', this);
}

let oDemo = {
    demoFunk3 : function() {
        console.log('this i demoFunk3 är: ', this);
    }
};

demoFunk2();
oDemo.demoFunk3();

    
    
