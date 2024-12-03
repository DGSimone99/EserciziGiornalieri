/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 1: Scrivi un algoritmo per trovare il più grande tra i due numeri interi");
let num1 = 25;
let num2 = 50;

if (num1 > num2) {
  console.log(num1 + " è maggiore di " + num2)
}
else {
  console.log(num2 + " è maggiore di " + num1)
};

console.log("_________________________________________________________________________________________________");

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 2: Scrivi un algoritmo che mostri <not equal> in console se un numero intero fornito è diverso da 5")

let num3 = 6;

if (num3 === 5) {
  console.log("equal to 5")
}
else {
  console.log("not equal")
};

console.log("_________________________________________________________________________________________________");
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 3: Scrivi un algoritmo che mostri <divisibile per 5> in console se un numero fornito è perfettamente divisibile per 5");

let div5 = 25;

if (div5 % 5 == 0) {
  console.log("Divisibile per 5")
};

console.log("_________________________________________________________________________________________________");
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 4: Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.")

let num4 = 8;
let num5 = 2;

if (num4 === 8 || num5 === 8 || num4 + num5 === 8 || num4 - num5 === 8) {
  console.log("Il numero dà come risultato 8")
}

console.log("_________________________________________________________________________________________________");
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 5: Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.")

let totalShoppingCart = 35

if (totalShoppingCart > 50) {
  console.log("Spedizione Gratuita")
}
else {
  console.log("Costo + spedizione = " + (totalShoppingCart + 10))
}

console.log("_________________________________________________________________________________________________");
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 6: Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.");

let totalShoppingCart2 = 60;

if (totalShoppingCart2 - (totalShoppingCart2/5) > 50) {
  console.log("Spedizione Gratuita")
}
else {
  console.log("Costo + spedizione = " + (totalShoppingCart2 - (totalShoppingCart2/5) + 10))
};

console.log("_________________________________________________________________________________________________");
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 7: Crea tre variabili, e assegna un valore numerico a ciascuna di esse. Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso. Alla fine mostra il risultato in console.");

let x = 12;
let y = 21;
let z = 35;

if (x > y && y > z) {
  console.log(x, y, z)
}
else if (x > z && z > y) {
  console.log(x, z, y)
}
else if (y > x && x > z) {
  console.log (y, x, z)
}
else if (y > z && z > x) {
  console.log (y, z, x)
}
else if (z > x && x > y) {
  console.log(z, x, y)
}
else if (z > y && y > x) {
  console.log(z, y, x)
};

console.log("_________________________________________________________________________________________________");
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 8: Crea un algoritmo per verificare che un valore fornito sia un numero oppure no")

if (typeof num1 === "number") {
  console.log(num1 + " è un numero")
}
else {
  console.log(num1 + " non è un numero")
};

console.log("_________________________________________________________________________________________________");
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 9: Crea un algoritmo per controllare se un numero fornito sia pari o dispari");

if (num1 % 2 === 0) {
  console.log(num1 + " è un numero pari")
}
else {
  console.log(num1 + " non è un numero pari")
};

console.log("_________________________________________________________________________________________________");
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 10: Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.")

let val = 7;
if (val < 10 && val > 5) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  };

console.log("_________________________________________________________________________________________________");
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 11: Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà <city>, il cui valore sarà <Toronto>.");

console.log(me)
me.city = "Toronto";
console.log(me);

console.log("_________________________________________________________________________________________________");
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 12: Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà <lastName>");

console.log(me)
delete me.lastName
console.log(me)

console.log("_________________________________________________________________________________________________");
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 13: Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà <skills>.")

console.log(me.skills);
me.skills.pop();
console.log(me.skills);

console.log("_________________________________________________________________________________________________");
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 14: Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.");

myArr = [""];
myArr.splice(0,10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(myArr);

console.log("_________________________________________________________________________________________________");
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 15: Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.");

myArr[9] = 100;
console.log(myArr);
