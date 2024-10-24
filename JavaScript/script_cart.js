// Dichiaro le variabili globali: le chiavi per la DOM manipulation, più una variabile settata a zero per il calcolo del totale.

let listaCarrello = document.querySelector("#listaCarrello");
let calcTot = document.querySelector("#calcTot");
let purchase = document.querySelector("#purchase");
let total = 0;

// Funzione per caricare i dati della fetch POST nel carrello.
function caricaCarrello(){

    const URLCarrello = "http://localhost:3000/cart";

    fetch(URLCarrello)
    .then(data =>{ 
        return data.json()
    }).then(response =>{
        
        //Con questo forEach, manipoliamo il DOM per aggiungere righe alla tabella ad ogni iterazione. In più, calcoliamo il totale.
        response.forEach(obj => {

            listaCarrello.innerHTML += `<tr><th scope="row">${obj.id}</th> <td>${obj.nome}</td> <td></td> <td>${obj.prezzo} € </td></tr>`
            total += obj.prezzo; 
            calcTot.innerHTML = total + " €";
        });

    })

}

// Semplice avviso quando il tasto "acquista" viene cliccato.
function purchaseAlert() {
    return alert ("Acquisto completato!");
}

document.addEventListener("DOMContentLoaded", caricaCarrello);
purchase.addEventListener("click", purchaseAlert);