/*

Snack 1:
* Il software deve chiedere per 10 volte all’utente
* di inserire un numero.
* Il programma stampa la somma di tutti i numeri inseriti.

*/

let array = [];
let numUtente;
let somma = 0;

for(let i = 0; i < 10; i++){
    numUtente = parseInt(prompt("Inserisci " + (i+1) + "° numero"));

    if(isNaN(numUtente)){
        array = []
        console.log(array);
    }
    else{
        array = [i];
        array = [numUtente]
        console.log(array);
        
        somma = somma + numUtente;
        
    }
}
console.log("la somma dei numeri è: " + somma);

let p = document.querySelector("#risultato");
p.innerHTML += "Risultato della somma dei numeri inseriti è : " + somma;

