let a = "my name is pavan";
let result = "";
let count = 0;   // to track position inside each word

// loop through each character
for (let i = 0; i < a.length; i++) {
    let ch = a[i];

    // if space → reset count and add space
    if (ch === " ") {
        result = result + " ";
        count = 0;   // reset for next word
        continue;
    }

    // if count is even → make lowercase
    if (count % 2 === 0) {
        // convert to lowercase manually
        if (ch >= "A" && ch <= "Z") {
            result = result + String.fromCharCode(ch.charCodeAt(0) + 32);
        } else {
            result = result + ch;
        }
    } 
    // if count is odd → make uppercase
    else {
        if (ch >= "a" && ch <= "z") {
            result = result + String.fromCharCode(ch.charCodeAt(0) - 32);
        } else {
            result = result + ch;
        }
    }

    count++;  // move to next position in word
}

console.log(result);  // mY nAme iS pAvan
