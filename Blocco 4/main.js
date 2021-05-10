/* //JSnack 1A
//Creare un oggetto palla che abbia le seguenti proprietà.
//Nome = palla
//Peso = 10
var palla = {
    nome: "Palla",
    peso: 10,
}


//JSnack 1B
//Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
palla.peso = parseInt(prompt("Quanto pesa la palla?")); */


//JSnack 2
//Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
var triangolo = {
    base: 10,
    altezza: 15,
}

function calcIpotenusa(a, b) {
    var result = parseInt(Math.sqrt((a ** 2) + (b ** 2)));
    return result;
}

//Calcolare perimetro e area.
var base = triangolo.base;
var altezza = triangolo.altezza;
triangolo.ipotenusa = calcIpotenusa(base, altezza);

//Perimetro
triangolo.p = triangolo.base + triangolo.altezza + triangolo.ipotenusa;

//Area
var area = (base * altezza) / 2;
triangolo.area = area;