
/* // ##### JSNACK 2 #####
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
 */


// ##### JSNACK 3 #####
var numeri = [];
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
for (i = 0; i < 10; i++) {
    numeri.push(parseInt(prompt("Inserisci un numero")));
}
//Il programma stampa la somma di tutti i numeri inseriti.
var somma = 0;
for (i = 0; i < numeri.length; i++) {
    somma = somma + numeri[i];
}
console.log(somma);