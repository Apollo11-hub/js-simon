/**Descrizione:**
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**Consigli del giorno:**
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.*/




/*
  - Creare numeri random
  - pusharli in un array 5 volte ed impedire le ripetizioni
  - Dargli un countdown di visibilità
  - Allo scadere del countdown chiedere all'utente i numeri che ricorda
  - creare un prompt che impedisca la ripetizine dei numeri (riuscendo ad impedire l'inserimento di lettere + utilizzo .trim)
  - Pushare i numeri dell'utente in un Array
  - Confrontare i due Array con :

  2) Creare array vuoto dove pushare i numeri che risultano uguali dal confronto tra numeri creati randomicamente e numeri inseriti.

  2) confrontare lunghezza array "Confronto" e dichiarare win or lost.
  */

    const randomList = [];
    const numeri = document.getElementById("numeri")
    
  const messaggio = document.getElementById("messaggio")

  
  let sec2w8 = 5 ;

  const sec = 5 ;
  
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------


  
  
  // // TIME FUNCTION MOSTRA NUMERI
  messaggio.innerHTML = ` Hai ${sec2w8} secondi per indovinare i numeri ! `;
  

  const countdown = setInterval(function(){

    messaggio.innerHTML = ` Hai ${--sec2w8} secondi per indovinare i numeri !`;

  },1000);

// TIME FUNCTION MOSTRA TESTO PRIMA DI CHIEDERE
  setTimeout(function(){

    clearInterval(countdown);

    messaggio.innerHTML = "Ora tocca a te, scrivi i numeri che ricordi";
    numeri.innerHTML = " ";

  },sec * 1000);


// TIME FUNCTION RICHIESTA UTENTE
  setTimeout(function(){

    const userNumbers = unserNumber();

    const guessedNumbers = checkNumbers(userNumbers);

    if(guessedNumbers.length === 0){
        alert("lost");
    }else{

        alert("win");
    }


  },sec * 1250);




// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------


// FUNZIONE CHE CREA NUMERO RANDOM
  function getRandomNumbers (min , max){

    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    return randomNumber;
  }


  // ciclo CHE pusha ARRAY CON 5 NUMERI RANDOMICI

  while(randomList.length < sec ){

    const newRandomNumber = getRandomNumbers(1,100);

    if(!randomList.includes(newRandomNumber)){
      randomList.push(newRandomNumber);
    }
  }

  numeri.innerHTML = `${randomList}`

  // FUNZIONE CHE CREA ARRAY CON NUMERI UTENTE

  function unserNumber(){

    const userChoice = [];

    while(userChoice.length < sec){

      const askToUser = parseInt(prompt("Inserisci Qui i numeri").trim());
      
      if(!askToUser === isNaN()) {

        alert("Inserisci un numero")

      }else if (!userChoice.includes(askToUser)) {

          userChoice.push(askToUser);

        }else{

          alert(" !!!Numero già inserito")
        }
    }
    return userChoice;
  }

  // FUNZIONE DI CONFRONTO TRA ARRAY



function checkNumbers(numbersToCheck){

  const guessedNumbers= [];

  for(let i = 0; i < randomList.length; i++){

      if(numbersToCheck.includes(randomList[i])){

          guessedNumbers.push(randomList[i])

      }
  }

  return guessedNumbers;
}