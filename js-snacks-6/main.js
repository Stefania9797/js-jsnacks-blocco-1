//N è un numero indicato dall’utente.
var userNumber = Number(prompt("Inserisci un numero"));
//Stampa il cubo dei primi N numeri,
for(var i=0; i<=userNumber; i++){
    console.log(Math.pow(i , 3));
}