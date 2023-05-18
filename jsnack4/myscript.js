/*
Snack 4:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

//let numero = "1212";
let cifra;
let somma = 0;
let array = [];

let numero = prompt("Inserisci un numero da 4 cifre: ");

let num = numero.length;

if(isNaN(numero)){ //NON METTENDO parseInt deve essere per forza un numero la stringa
    alert("Inserire un numero di 4 cifre, ricaricare la pagina");
}
else{
    if((num > 0) && (num < 5)){
        for(let i = 0; i < num; i++){

        

            cifra = parseInt(numero.substring(i,(i+1)));
            array[i] = cifra;
            console.log(array[i]);
            somma = somma + cifra;
        }
    
        console.log("La somma è: " + somma);
    
        let p = document.querySelector("#risultato");
    
        p.innerHTML = "La somma dei numeri tra loro è: " + somma;
    }
    else{
        alert("Inserisci un numero positivo da 4");
    }
    
}
