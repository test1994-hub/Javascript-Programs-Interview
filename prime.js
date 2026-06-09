//Find a prime number or not:

const num = 17; // Input number to check
let isPrime = true; // Flag variable to track if the number is prime
// Check if num is less than 2 → not prime

  for(let i=2; i <num; i++){

    if(num % i === 0){
        isPrime = false; // If num is divisible by any number between 2 and num-1, it's not prime
        break; // Exit loop early since we found a divisor
    }}

if(isPrime){
    console.log(num, 'is a prime number');

}
else{
    console.log(num, 'is not a prime number');
}

//2.Find all prime numbers betwen two numbers:

const start = 10; // Starting number of the range
const end = 50;
const primes = []; // Array to store prime numbers

for(let i=start; i <=end; i++){
    let isPrime = true; // Assume i is prime until proven otherwise
    for(j=2; j<i;j++){
        if(i % j === 0){
            isPrime = false; // If i is divisible by any number between 2 and i-1, it's not prime
            break; // Exit inner loop early since we found a divisor
        }
    }

if(isPrime){
    console.log(i, 'is a prime number');
}}

/*
💡 Interview explanation:
1. We define a range (start to end).
2. For each number i in that range, assume it's prime.
3. Check divisibility by all numbers from 2 to i-1.
   - If divisible, mark as not prime and break.
4. After checking, if still prime → print it.
5. We exclude 1 because it's not considered a prime.
*/