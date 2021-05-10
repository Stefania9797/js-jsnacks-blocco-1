//Creare un oggetto con le seguenti proprietà: nome:palla peso:10
var palla= {
    nome: "palla",
    peso: 10
}
//Dare all'utente possibilità di cambiare il peso
var userPeso= prompt("Qual è il nuovo peso della palla?")
palla.peso=userPeso
console.log(palla);