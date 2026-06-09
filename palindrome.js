
let word = 'Madam'

//word.toLowerCase() → converts the string to lowercase.

//.split('') → splits the string into an array of characters.
//Since we cant reverse a string directly, we need to convert it into an array of characters first.

//.reverse() → reverses the array.

//.join('') → joins the array back into a string.
// '' empty string is used as the separator in join() to concatenate the characters without any spaces.

let result = word.toLowerCase().split('').reverse().join('')

console.log(word, result)

if (result === word.toLowerCase()){
    console.log('Palindrome')
}
else{
    console.log('Not a palindrome')
}

// 2.Palindrome check without using built-in reverse/join functions

let text = 'Racecar';   // Input string to check
let isPalindrome = true; // Flag variable to track result

// Loop only until half the length of the string
// Why? Because in a palindrome, the first half mirrors the second half.
// Example: "racecar" → compare r vs r, a vs a, c vs c.
// Once you reach the middle, you’re done.
for (let i = 0; i < text.length / 2; i++) {

    // text[i] → character from the front
    // text[text.length - 1 - i] → character from the back
    // .toLowerCase() → ensures case-insensitive comparison
    // Without this, "R" and "r" would be considered different.
    if (text[i].toLowerCase() !== text[text.length - 1 - i].toLowerCase()) {
        isPalindrome = false; // If mismatch found, set flag to false
        break;                // Exit loop early since it's not a palindrome
    }
}

// Print result only once after loop finishes
if (isPalindrome) {
    console.log('Palindrome');
} else {
    console.log('Not a palindrome');
}

/*
Step-by-step interview explanation:
1. Store the word in a variable.
2. Use a loop that runs only half the string length → efficient.
3. Compare front vs back characters.
4. Convert both to lowercase → case-insensitive check.
   - Needed because "Racecar" has uppercase 'R' at the start.
   - Without normalization, 'R' !== 'r'.
5. If any mismatch → break and mark as not palindrome.
6. After loop, print result once using the flag variable.
*/
