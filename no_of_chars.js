//find number of a, collection of characters to count from company name = 'Amazon'

// Step‑by‑Step Logic
// Input string: "Amazon"  
// That’s our company name.

// Target character: 'a'  
// We want to count how many times 'a' appears.

// Initialize counter:
// Start with count = 0.

// Use for...of loop:

// This loop directly gives each character in the string.

// Compare each character with 'a' (and 'A' if you want case‑insensitive).

// Increment the counter when it matches.

// Final result:
// Print the count after the loop ends. 

//--------------------xxxxxxxxxxxxxxxxxxx---------------------

let company = 'Amazon'
let targetchar = 'a'
let count = 0

for (let char of company.toLowerCase()){
    if (char === targetchar){
        count++
    }
}
console.log(count)

//Psuedocode:
// SET companyName = "Amazon"
// SET targetChar = "a"
// SET count = 0

// FOR each character in companyName
//     IF character equals targetChar (case-insensitive)
//         INCREMENT count by 1
//     ENDIF
// ENDFOR

// PRINT "Number of 'a' in companyName = " + count
