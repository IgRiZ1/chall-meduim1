// Begin van userInput voorbereidenµµ
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden
let som 
let deling
let verschil 
let product
let getal1 = 33; 

let getal2 = 45; 

som = getal1 + getal2
verschil = getal1 - getal2
deling = getal1/getal2
product = getal1 * getal2

console.log('het som  is'+'',som)
console.log('het deling is'+'',deling)
console.log('het verschil  is'+'',verschil)
console.log('het product is'+'',product)

