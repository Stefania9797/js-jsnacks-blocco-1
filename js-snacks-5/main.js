//Crea un array vuoto.
var numberList = []
//Chiedi per 6 volte all’utente di inserire un numero,
/*for(i=0; i<6; i++){
    var userNumber = Number(prompt("Inserisci un numero"));
    //se è dispari inseriscilo nell’array.
    /*if(userNumber % 2 !== 0){
        numberList.push(userNumber);
    }
}
console.log(numberList);*/

i=0;
while(i<6){
    var userNumber = Number(prompt("Inserisci un numero"));
    if(userNumber % 2 !== 0){
        numberList.push(userNumber);
    }
    i++;
}
console.log(numberList);
