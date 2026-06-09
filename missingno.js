let arr=[1,2,3,5,99];

let count = 100;
let output = [];

for (let i=0; i<=count; i++){
    //<= because we want to include 100 in the output if it's missing from the array
    //we have array of index and array includes method
     !(arr.includes(i))?output.push(i):"";
     //! negates the condition, so if arr does not include i, it pushes i to output. 
     //If arr includes i, it does nothing (the empty string is just a placeholder).
      

     }
console.log(output)
//For large arrays, a Set would be faster:

//let set = new Set(arr);
//for (let i=0; i<count; i++){
   //if(!set.has(i)) output.push(i);
//}

//When you use arr.includes(i), JavaScript has to scan through the array until it finds the element, which is O(n). 
// With a Set, the lookup is O(1) because it uses hashing. 
//That’s why for large datasets or repeated lookups, converting an array to a Set is much more efficient.”

//2.Without built in method
// Step 1: Define the given array
let arr = [1, 2, 3, 5, 99];   

// Step 2: Define the range limit (we want numbers from 0 to 100)
let count = 100;

// Step 3: Create an empty array to store missing numbers
let output = [];

// Step 4: Loop through all numbers from 0 to 100
for (let i = 0; i <= count; i++) {
    // Step 5: Assume the number is not found initially
    let found = false;  

    // Step 6: Check each element in the given array
    for (let j = 0; j < arr.length; j++) {
        // Step 7: If the current number matches, mark as found and break
        if (arr[j] === i) {
            found = true;
            break;
        }
    }

    // Step 8: If not found in the array, push it into output
    if (!found) {
        output.push(i);
    }
}

// Step 9: Print all missing numbers
console.log(output);

