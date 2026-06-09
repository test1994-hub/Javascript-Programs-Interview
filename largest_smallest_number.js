//Largest

let arr = [12, 5, 8, 19, 3, 7];

let largest = arr[0]; // assume first element is largest

// Step 1: Loop through array
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i]; // update largest if current is bigger
    }
}

// Step 2: Print result
console.log("Largest number: " + largest);

//Smallest

let arr2 = [12, 5, 8, 19, 3, 7];    
let smallest = arr2[0]; // assume first element is smallest
// Step 1: Loop through array
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] < smallest) {
        smallest = arr2[i]; // update smallest if current is smaller
    }
}
// Step 2: Print result
console.log("Smallest number: " + smallest);    
