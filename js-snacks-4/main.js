//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
var username = prompt("Qual è il tuo nome?");
var invitati = ["stefania","maria","marco","luigi"];
//chiedi all’utente il suo nome 
var accesso = false;
//e comunicagli se può partecipare o no alla festa. 
for (var i = 0; i < invitati.length; i++) {
    if (invitati[i]==username){
        accesso = true;
    }
}
if(accesso){
    alert("sei invitato!")
} else{
    alert("non sei invitato!")
}