//no built in method

let str = "kishore@*&232(*&^%$#@!)"

let result = ''

for (let i of str){
    if (
        (i >= 'a' && i <= 'z') ||
        (i >= 'A' && i <= 'Z') ||
        (i >= '0' && i <= '9') ||
        i === ' '
    ) {
        result += i
    }
}
console.log(result)

//I looped through each character in the string using for...of. 
// For each character, I checked if it was a letter, digit, or space. 
// If yes, I added it to the result string. This way, special characters were skipped.
//  At the end, I printed the cleaned string.”