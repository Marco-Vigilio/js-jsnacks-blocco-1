/*
Snack 4:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

let numero = "1212";
let cifra;
let somma = 0;
let array = [];

//let numero = parseInt(prompt("Inserisci un numeo da 4 cifre: "));
    
    for(let i = 0; i < numero.length; i++){

        

        cifra = parseInt(numero.substring(i,(i+1)));
        array[i] = cifra;
        console.log(array[i]);
        somma = somma + cifra;
    }

    console.log("La somma è: " + somma);

    let p = document.querySelector("#risultato");

    p.innerHTML = "La somma dei numeri è: " + somma;

