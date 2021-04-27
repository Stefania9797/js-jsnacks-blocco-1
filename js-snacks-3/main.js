//Il software deve chiedere per 10 volte all’utente di inserire un numero.
var somma=0;
for (i = 0; i<10; i++) {
    var userNumber = Number(prompt("Inserisci un numero"));
    somma += userNumber;
}
//Il programma stampa la somma di tutti i numeri inseriti
console.log(somma);