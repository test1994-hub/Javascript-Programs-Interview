let str = "Kishore";   // Input string
let vowels = "aeiouAEIOU"; // All vowels (both cases)
let result = "";       // To store found vowels

// Loop through each character of the string
for (let i = 0; i < str.length; i++) {
    let ch = str[i];   // Current character
    let isVowel = false;

    // Compare with each vowel manually
    for (let j = 0; j < vowels.length; j++) {
        if (ch === vowels[j]) {
            isVowel = true;
            break;     // Found match, no need to check further
        }
    }

    // If vowel, add to result
    if (isVowel) {
        result += ch;
    }
}

console.log("Vowels found: " + result);


//I used two nested loops to check each character in the input string against a list 
// of vowels. If a match is found, the character is added to the 'found' string. 
// Finally, I print out all the vowels that were found in the input string.