/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 1")

function area(l1, l2) {
    return (l1*l2)
}

console.log("L'area del rettangolo è " + area(3,6))


console.log("_____________________________________________________________")
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 2")

function crazySum(x, y) {
    if (x === y) {
        return (x + y) * 3;
    } else {
        return x + y;
    }
}

console.log("Dati due numeri diversi, 2 e 5, la loro somma è: " + crazySum(2, 5))

console.log("Dati due numeri uguali, 2 e 2, la loro somma è moltiplicata x 3: " + crazySum(2, 2))

console.log("_____________________________________________________________")
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 3")

function crazyDiff(x) {
    let y = 19;
    let resultDiff = Math.abs(x - y);
    if (x > 19) {
        return resultDiff * 3
    } else {
        return resultDiff
    }
}

console.log("La differenza assoluta tra 19 e 5 : " + crazyDiff(5))

console.log("La differenza assoluta tra 19 e 21 moltiplicata x 3 è: " + crazyDiff(21))

console.log("_____________________________________________________________")
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 4")

function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return true
    } else {
        return false
    }
}

let bound = boundary(20)
console.log("Se n è tra 20 e 100, o 400 risulta vero: " + bound)


console.log("_____________________________________________________________")
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 5")

function epify(stringa) {
    if (typeof stringa === "string") {
        if (stringa.startsWith("EPICODE")) {
        return stringa
        } else {
        return "EPICODE" + stringa
       }
    }
    return "Invalido"
}
    
console.log(epify("Ciao a tutti"))

console.log("_____________________________________________________________")
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 6")

function check3and7(x){
    if (x > 0) {
        if (x % 3 === 0) {
            return x + " è un multiplo di 3"
        } else if (x % 7 === 0) {
            return x + " è un multiplo di 7"
        } else {
            return x + " non è un multiplo di 3 o 7"
        }
    }
    return x + " non è un numero valido"
}

console.log(check3and7(9))

console.log("_____________________________________________________________")
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 7")

function reverseString(stringa) {
    return stringa.split("").reverse().join("")
}

console.log(reverseString("EPICODE"))

console.log("_____________________________________________________________")
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 8")

function upperFirst (stringa) {
    return stringa.split(" ")
    .map(parola => parola.charAt(0).toUpperCase() + parola.slice(1))
    .join(" ")
}
console.log(upperFirst("Ciao a tutti"))

console.log("_____________________________________________________________")
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 9")

function cutString(stringa) {
    return stringa.slice(1,-1)
}

console.log(cutString("Ciao a tutti"))


console.log("_____________________________________________________________")
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 10")

function giveMeRandom(n) {
    let randNum = []
    for (let i = 0; i < n; i++) {
        randNum.push(Math.random() * 10);
    }
    return randNum
}

console.log(giveMeRandom(4))


console.log("_____________________________________________________________")



// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Extra 1")


function checkArray(numbers) {
    let sum = 0
    numbers.forEach(element => {
        if (element > 5) {
            sum += element;
            return console.log(element + " Maggiore di 5")
        } else {
            return console.log(element + " Minore o uguale a 5")}
        }
    )
    return sum
}

let numbers = giveMeRandom(7)

console.log(checkArray(numbers))


console.log("_____________________________________________________________")
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
