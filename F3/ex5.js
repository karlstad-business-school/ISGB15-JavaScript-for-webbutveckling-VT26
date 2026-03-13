'use strict';

//Inte nog med detta utan det finns dessutom fler sätt att lägga till lyssnare...
//En metod som heter addEventListener()...

document.querySelector('body').onload = function() {
    //När sidan har laddats sätt markören i första textrutan

    document.querySelector('[title=nickName]').focus();
};

document.querySelector('form').onsubmit = function() {
    /*när användaren försöker submitta formulärdata kontrollera och använd undantagshantering:

        1. Att stränglängden på namn är minst fem tecken långt
        2. Att stränglängden på sekunder inte är noll, inte är siffror och inte innehåller värdet noll (0)

        Kom ihåg att returna rätt värde från funktionen och meddela användaren vad som är fel resp.
        sätt markören på gränssnittskomponenten som genererade första felet.
    */

    try{

        let nickName = document.querySelector('[title=nickName]');
        let seconds = document.querySelector('[title=seconds]');

        console.log( nickName, seconds);

        if( nickName.value.length < 5) {
            //Allt är inte ok...
            throw {
                element : nickName,
                errorMsg : 'Nickname måste innehålla minst fem tecken!'
            };
        }

        return true;

    } catch(oError) {

        //Meddela användare vad som är fel
        document.querySelector('#errorMsg').textContent = oError.errorMsg;
        oError.element.focus();

        return false;
    }
    
};

/*

function demoFunction() {
    console.log('En första utskrift...');
}
    */
