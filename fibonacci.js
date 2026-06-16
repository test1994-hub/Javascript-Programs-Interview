

// 0,1,1,2,3,5,8,13,21,34

// Step 1: Initialize first two numbers
let n1 = 0, n2 = 1;

// Step 2: Decide how many Fibonacci numbers to print
let n = 20;

// Step 3: Print the first two numbers
console.log(n1);
console.log(n2);

// Step 4: Loop from 3rd term up to n
for (let i = 3; i <= n; i++) {
    // Calculate next number
    let n3 = n1 + n2;

    // Print it
    console.log(n3);

    // Update values for next iteration
    n1 = n2;
    n2 = n3;
}

//why i=3

//That means terms 1 and 2 (0 and 1) are already handled.

//The loop is meant to generate the remaining terms.

//So, the next term to calculate is the 3rd term (n3 = n1 + n2 → 0 + 1 = 1).

//Therefore, the loop starts at i = 3 and runs until i <= n.