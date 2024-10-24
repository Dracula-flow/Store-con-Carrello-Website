// Conviene fare due classi per due tipi di oggetti:
// La classe film servirà a costruire le card presenti nello shop;
// La classe Obj servirà a portare i dati essenziali per l'acquisto nel carrello.

class Film{
    constructor(id, name, price, descAlt, year, image){
        this.id = id;
        this.name = name;
        this.price = price;
        this.descAlt = descAlt;
        this.year = year;
        this.image = image;
    }
}

class ObjPerCarrello{
    constructor(id, prezzo, nome){
        this.id = id;
        this.prezzo = prezzo;
        this.nome = nome;
    }
}


//Tramite questa funzione, scrivo una chiamata fetch per prendere i dati dal mio mock-database in json.
function caricaFilm(){

    //fetch
    const URL = "http://localhost:3000/film";

    fetch(URL)
    .then(data =>{
        return data.json();
    }).then(response =>{
        console.log(response);

        //con il forEach, costruisco gli oggetti di classe Film con i dati presenti nel database. Inoltre, inserisco tramite DOM
        //gli oggetti in una card formattata tramite Bootstrap.
        response.forEach(film => {
            let mioFilm = new Film(film.id,film.name, film.price, film.descAlt, film.year, film.image)
            rigaProd.appendChild(creaCard(mioFilm));
        });
    })

}

//DOMContentLoaded chiama la funzione non appena la pagina è stata caricata.
document.addEventListener("DOMContentLoaded", caricaFilm);
//variabile globale per l'appendChild di cui sopra.

let rigaProd = document.querySelector("#catalogue");

// Funzione per creare le card in cui verrano mostrati i film.
function creaCard(film){
//Ogni card è un div. Tutte le card sono chiuse in un altro div.
    let cardCol = document.createElement("div");
    cardCol.setAttribute("class", "col-md-4 mb-3");

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("style", "width: 26rem");

    card.innerHTML = `<img class="card-img-top" src=${film.image} />
                       <div class="card-body">
                             <h3 class="card-title">${film.name}</h3>
                             <p class="card-text">Id: ${film.id}</p>
                             <p class="card-text">${film.descAlt}</p>

                     </div>`;

    let buttonCompra = document.createElement("button");
    buttonCompra.setAttribute("class", "btn btn-primary");
    buttonCompra.textContent = `Aggiungi al carrello - ${film.price} €`;

       buttonCompra.addEventListener("click", function(){
        addACarrello(film.id, film.price, film.name);
     });

    card.appendChild(buttonCompra);
     cardCol.appendChild(card);

    return cardCol;
}


// Tramite una fetch POST, inseriamo i dati dell'oggetto desiderato nel nostro database, in cui c'è una voce vuota fatta apposta.
function addACarrello(id, prezzo, nome){
    //fetch method POST
    console.log(id, prezzo, nome);
    const URLCarrello = "http://localhost:3000/cart";

    let objPerCarrello = new ObjPerCarrello(id, prezzo, nome);

    fetch(URLCarrello, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objPerCarrello)
    }).then(data =>{
        return data.json();
    })

 }