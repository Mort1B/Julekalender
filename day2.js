const { count } = require("console");
const { promises } = require("fs");

const citizens = 5433000;
const num = '7';
let delivery = [];
let counter = 0;
let primeNumber = 0;

function isPrime(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return true;
}
  
for (i = 0; i <= citizens; i++) {
    let stringy = i.toString();
    
    if (stringy.includes(num)) {
        for (let j = primeNumber; j <= i; j++) {
            if (isPrime(j)) {
                primeNumber = j;
            }
        }
        
        i = i + primeNumber; 
    } else {
        delivery.push(i);
    }
}

console.log('Amount of deliveries:' + delivery.length);
