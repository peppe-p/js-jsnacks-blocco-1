
/* // ######## JSNACK 2 ########
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




/* // ######## JSNACK 3 ########
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
console.log(somma); */





/* // ######## JSNACK 4 ########
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
var lista_invitati = ["Gennaro", "Totuccio", "Antonino", "Paolo"];

//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
var tuo_nome = prompt("Vuoi partecipare? Qual'è il tuo nome?");
if (lista_invitati.includes(tuo_nome)) {
    console.log("Puoi entrare, BENVENUTO!");
} else {
    console.log("Mi dispiace, non puoi entrare!");
} */





/* // ######## JSNACK 5 ########
//Crea un array vuoto.
var num = [];

//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array
for (var i = 0; i < 6; i++) {
    var myNum;
    myNum = parseInt(prompt("Inserisci un numero"));
    if (myNum % 2 == 1) {
        num.push(myNum);
    } else {

    }
} */





/* // ######## JSNACK 6 ########
//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
var n_volte = parseInt(prompt("Fino a che numero vuoi sapere il cubo?"));
for (var i = 1; i <= n_volte; i++) {
    var cubo = i ** 3;
    console.log(i + " = " + cubo);
} */





// ######## JSNACK 8 ########
//Chiedi un numero di 4 cifre all’utente
var controllo = true;
while (controllo) {
    var num = parseInt(prompt("Inserisci un numero di minimo 4 cifre"));
    if (num < 1000) {
        alert("Il numero deve essere ALMENO da 4 cifre!");
    } else {
        controllo = false;
    }
}
//e calcola la somma di tutte le cifre che compongono il numero.
var string_num = num.toString();
var container = []
for (var i = 0; i < string_num.length; i++) {
    container.push(string_num.charAt(i));
}
var somma = 0;
for (var i = 0; i < container.length; i++) {
    var totale = somma += parseInt(container[i]);
}
//console.log(parseInt(container[0]));
console.log("La somma delle cifre è: " + totale);