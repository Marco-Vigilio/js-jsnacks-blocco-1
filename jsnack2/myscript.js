/*
In un array sono contenuti i nomi degli invitati alla festa 
del grande Gatsby, chiedi all’utente il suo nome e 
comunicagli se può partecipare o no alla festa.
*/

let invitati = ["Gigio", "Giorgio", "Gino", "Giulio", "Junior"];

console.log(invitati.length);

let nomeUtente = prompt("Inserisci il tuo nome: ");

let verifica = false;

for(let i = 0; i < invitati.length; i++){
    
    if(nomeUtente === invitati[i]){
        console.log(invitati[i]  + " = " + nomeUtente);
        console.log("E' nella lista");
        verifica = true;
    }
    else{
        console.log(invitati[i]  + " != " + nomeUtente);
        console.log("Non è nella lista");
    }
    console.log();
}


let p = document.querySelector("#risultato");

if(verifica === true){
    console.log("Entra sei nella lista");
    p.innerHTML = "SEI NELLA LISTA";
}
else{
    console.log("Non sei nella lista");
    p.innerHTML = "NON SEI NELLA LISTA";
}

