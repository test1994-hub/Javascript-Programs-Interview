//Find second highest element in an array

let arr = [1, 43, 453, 65, 321, 9, 23, 999];

// Initialize highest and second highest values
let high = -Infinity;    
let second = -Infinity;  

// Loop through each element in the array
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];  // Get the current element

    // If current number is greater than the highest
    if (num > high) {
        second = high;   // Move the old highest into second
        high = num;      // Update highest with current number
    } 
    // If current number is between highest and second highest
    else if (num > second && num < high) {
        second = num;    // Update second highest
    }
}

// Print results
console.log("Highest:", high);          // 999
console.log("Second Highest:", second); // 453


//Second smallest element in an array

let arr = [1, 43, 453, 65, 321, 9, 23, 999];

// Initialize smallest and second smallest values
let smallest = Infinity;       // start with +Infinity so any number will be smaller
let secondSmallest = Infinity; // same for second smallest

// Loop through each element in the array
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];  // current element

    // If current number is smaller than smallest
    if (num < smallest) {
        secondSmallest = smallest; // move old smallest into second smallest
        smallest = num;            // update smallest
    } 
    // If current number is greater than smallest but smaller than second smallest
    else if (num > smallest && num < secondSmallest) {
        secondSmallest = num;      // update second smallest
    }
}

// Print results
console.log("Smallest:", smallest);             // 1
console.log("Second Smallest:", secondSmallest); // 9

