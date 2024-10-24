# Store-con-Carrello-Website
Un semplice webstore in JS.

REQUISITI:
1. JSON-server;
2. Bootstrap;

DESCRIZIONE DETTAGLIATA:
Il compito consiste nella costruzione di un webstore con sezione prodotti, i quali possono essere aggiunti ad un carrello tramite click su un bottone.
La mia versione contiene 3 file HTML (Index, Shop, Cart), 2 file JS (Index e Cart), 1 database JSON e diverse immagini per arricchire lo shop.
Ogni HTML ha una navbar per ciclare tra le pagine; il Carrello contiene una tabella che verrà poi manipolata tramite DOM.

Il database JSON contiene i dati che andranno poi mostrati e usati nelle pagine shop e cart. Questo avviene tramite diverse Fetch: 2 GET e 1 POST.

Prima di avviare le pagine, è necessario attivare il mock database usando il comando "json-server ./db/database.JSON" nel terminale. 
A me funziona anche scrivendo json-server e premendo una volta la freccia su.

Le immagini sono perlopiù free-licensed, un paio sono state generate tramite AI.

Problemi del codice:
1- Evidente mancanza di estetica;
2- Non so ancora come eliminare i dati del carrello dal database, una volta conclusi gli acquisti. 
