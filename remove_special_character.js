//no built in method

let str = "kishore@*&232(*&^%$#@!)"

let result = ''

for (let i = 0; i < str.length; i++) {
    let ch = str[i]   // get character at index i

    if (
        (ch >= 'a' && ch <= 'z') ||
        (ch >= 'A' && ch <= 'Z') ||
        (ch >= '0' && ch <= '9') ||
        ch === ' '
    ) {
        result += ch
    }
}

console.log(result)


//I looped through each character in the string using for...of. 
// For each character, I checked if it was a letter, digit, or space. 
// If yes, I added it to the result string. This way, special characters were skipped.
//  At the end, I printed the cleaned string.”
