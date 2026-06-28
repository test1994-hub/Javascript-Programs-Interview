// input string
let a = "abc-2019";

// part1 will hold characters before the dash
let part1 = "";

// part2 will hold characters after the dash
let part2 = "";

// flag to check if dash is found
let foundDash = false;

// loop through each character of the string
for (let i = 0; i < a.length; i++) {
    // if current character is dash
    if (a[i] === "-") {
        foundDash = true;   // mark that dash is found
        continue;           // skip adding the dash itself
    }

    // if dash not yet found, add to part1
    if (!foundDash) {
        part1 = part1 + a[i];
    } 
    // if dash already found, add to part2
    else {
        part2 = part2 + a[i];
    }
}

// print both parts inside square brackets
console.log("[" + part1 + "]");
console.log("[" + part2 + "]");

//2.Insert and replace -
let str = "My name is so and so";
let out = "{";   // start with opening brace

// loop through each character
for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
        // replace space with dash
        out = out + "-";
    } else {
        // keep the character as is
        out = out + str[i];
    }
}

out = out + "}"; // add closing brace

console.log(out);  // {My-name-is-so-and-so}

