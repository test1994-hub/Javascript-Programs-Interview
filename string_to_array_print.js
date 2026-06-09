// Input string
let str = "hello";

// Step 1: Create an empty array to store characters
let arr = [];

// Step 2: Use for...of loop to iterate directly over characters of the string
for (let ch of str) {
    // Step 3: Add character to array manually (no push)
    arr[arr.length] = ch;
}

// Step 4: Print the array
console.log(arr);

//I used a for...of loop because strings are iterable in JavaScript. 
// This loop directly gives each character without needing an index. 
// I then manually inserted each character into the array using arr[arr.length] = ch, 
// which avoids built‑in methods like split() or push(). This shows I understand both 
// iteration and how arrays grow dynamically