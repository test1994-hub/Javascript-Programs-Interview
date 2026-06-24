1.Built in :

  let str = "Kishore is from Chennai";

// Split into words
let words = str.split(" ");  

// Swap first and last
let temp = words[0];
words[0] = words[words.length - 1];
words[words.length - 1] = temp;

// Join back into a string
let result = words.join(" ");

console.log(result);  // Output: "Chennai is from Kishore"

//2.Reverse each word in string

let str = "kishore Kumar from Chennai";

// Split into words
let words = str.split(" ");

// Reverse each word
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
}

// Join back into a string
let result = words.join(" ");

console.log(result);  
// Output: "erohsik ramuK morf inahneC"
