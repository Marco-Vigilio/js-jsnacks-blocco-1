/*
Snack 3:
*Crea un array vuoto.
*Chiedi per 6 volte all’utente di inserire un numero,  
se è dispari inseriscilo nell’array.
*/

let array = [];
let numUtente;
let p = document.querySelector("#risultato");

p.innerHTML += "L'array contiene i seguenti numeri: ";
for(let i = 0; i < 6; i++){

    numUtente = parseInt(prompt("Inserisci " + (i+1) + "° numero"));

    if(isNaN(numUtente)){
        console.log("Il numero " + (i+1) + " non è stato inserito");

        array[i] = [];
        console.log(array[i]);
        
        p.innerHTML += "[ ]  " ;
        
    }
    else{

        if((numUtente % 2) === 0){
            console.log("Il numero " + (i+1) + " è pari");
            
            array[i] = [];
            console.log(array[i]);
            p.innerHTML += "[ ]  " ;
            
            
        }
        else{
            array[i] = numUtente;
            console.log("Il numero "+ (i+1) + " è dispari = " + array[i]);
            console.log(array[i]);
            
            p.innerHTML += "[" + array[i] + "]  " ;
        }
    }
}


console.log("La grandezza del mio array è: " + array.length);

