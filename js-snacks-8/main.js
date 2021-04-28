//Chiedi un numero di 4 cifre all’utente
var userNumber = Number(prompt("Inserisci un numero con 4 cifre"));
//e calcola la somma di tutte le cifre che compongono il numero
var somma= 0;
while(userNumber){
    somma = somma + userNumber % 10;
    userNumber = Math.floor(userNumber / 10);
}
console.log(somma);