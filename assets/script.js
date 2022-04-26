/**Descrizione:**
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**Consigli del giorno:**
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.*/




/*  -generare un numero casuale da 1 a 100
    -stamparlo in pagina in 5 punti diversi
    -dare un timer allo scadere del quale scompaiono tutti i numeri
    - Chiedere all'utente quali fossero i 5 numeri
    -confrontare la risposta 
    -stampare i numeri indovinati
*/



const start = document.getElementById("start");

const display = document.getElementById("display");

const sec = 4


start.addEventListener("click", startGame);





function startGame(){

  display.innerHTML = `Simon's say  ${getRandomNumber(1 , 100) } - ${getRandomNumber(1 , 100) } - ${getRandomNumber(1 , 100) } - ${getRandomNumber(1 , 100) } - ${getRandomNumber(1 , 100) }.`

  // DUBBIO SUL CORRETTO POSIZIONAMENTO DI QUESTO TIMER
  setTimeout(hideClass, sec * 1000);
  setTimeout(ask5times, sec * 1250);



}

function hideClass(){
display.classList= "hide";
}

function ask5times (){
  let askNumber ;
  for (let i = 0; i < 5 ; i++) {
    askNumber = prompt("Inserisci i numeri").trim();
    
  }
  return askNumber
}


// INSERIRE I NUMERI RANDOM IN UN ARRAY e confrontare con i numeri inseriti dallutente


function getRandomNumber(min, max){

   return  Math.floor(Math.random() * (max - min +1) + min );

}
