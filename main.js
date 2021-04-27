//L’utente inserisce due parole in successione, con due prompt.
var word1 = prompt("Inserisci la 1a parola");
var word2 = prompt("Inserisci la 2a parola");

//Il software stampa prima la parola più corta, poi la parola più lunga.
if (word1.length < word2.length) {
    console.log(word1, word2);
} else if (word2.length < word1.length) {
    console.log(word2, word1);
} else {
    console.log("Le parole hanno la stessa lunghezza!");
}