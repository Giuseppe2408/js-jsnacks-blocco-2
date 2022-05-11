// crea un array vuoto
let Emptyarray = [];
let somma = 0;
do {
    Emptyarray.push(somma);
    let inputNumber = parseInt(prompt('inserisci numero'));
    // somma
    somma += inputNumber;
} while (somma <= 50);
    

console.log(Emptyarray);