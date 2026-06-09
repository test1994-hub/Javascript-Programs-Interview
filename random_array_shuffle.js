// Start from the last element of the array.

// Generate a random index between 0 and the current index.

// Swap the current element with the element at the random index.

// Repeat until the array is fully shuffled.

// This ensures every element has an equal chance of ending up in any position.
let arr = [1,2,3,4,5]
function shuffle(arr){
    // Loop starts from the last index of the array and moves backwards
    for (let i = arr.length-1; i>0; i--){
        // i = arr.length - 1 → last element index
    // i > 0 → stop when we reach index 1 (no need to shuffle index 0)
    // i-- → decrement i each time, so we move leftwards through the array

     // Generate a random index between 0 and i
        let j = Math.floor(Math.random() * (i +1))
        // Math.random() → gives a decimal between 0 and 1 (e.g., 0.234)
    // (i + 1) → scales it up to range [0, i] (inclusive)
    // Math.floor(...) → converts decimal to integer (drops fraction)
    // So j is a random integer between 0 and i

    
        //swap arr[i] and arr[j]

        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
}
console.log(shuffle(arr))