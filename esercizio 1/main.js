// crea array di 10 numeri casuali da 1 a 100
const arrayNumber = [];
// con il maggiore uguale ciclo infinito
while (arrayNumber.length < 10) {
   
    let randNum = (Math.floor(Math.random() * 100) + 1)
    // punto esclamativo uguale not e varia la condizione da true a false
    if (!arrayNumber.includes(randNum)) { 
        arrayNumber.push(randNum);
    }
    
}
console.log(arrayNumber);
// fai in modo che non ci siano doppioni