//factorial = 3*2*1 = 6

let num = 6;
let result = 1;

// factorial using a loop
for (let i = 1; i <= num; i++) {
  result = result * i;
}

console.log("Factorial of", num, "is", result);

//---------------------------xxxxxxxxxxxxxxxxxxxxxx--------------------

//Explanation of the code:

// Step 1: Declare the number whose factorial we want
let num = 6;  
// Here, num = 6. We want to calculate 6! (factorial of 6).

// Step 2: Initialize a result variable to 1
let result = 1;  
// This will store the ongoing multiplication.
// Starting with 1 is important because multiplying by 0 would always give 0.

// Step 3: Create a loop from 1 up to num (inclusive)
for (let i = 1; i <= num; i++) {
  // On each iteration, multiply result by the current value of i
  result = result * i;

  // Optional: You can log intermediate steps to see the calculation
  // console.log("Iteration:", i, "Intermediate result:", result);
}

// Step 4: After the loop finishes, result holds the factorial value
console.log("Factorial of", num, "is", result);  
// This prints: Factorial of 6 is 720
