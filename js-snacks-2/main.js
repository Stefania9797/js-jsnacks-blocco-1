//L’utente inserisce due parole in successione, con due prompt.
var word_1 = prompt("Inserisci una parola");
var word_2 = prompt("Inserisci un'altra parola");
//Il software stampa prima la parola più corta, poi la parola più lunga.
if (word_1.length==word_2.length){
    console.log("Le parole hanno la stessa lunghezza");
} else if(word_1.length<word_2.length){
    console.log(word_1);
    console.log(word_2);
} else if(word_1.length>word_2.length){
    console.log(word_2);
    console.log(word_1);
}