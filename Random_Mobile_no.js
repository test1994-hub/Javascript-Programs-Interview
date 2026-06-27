let mobile = "9";   // start with 9

// loop 9 times to create the remaining digits
for (let i = 0; i < 9; i++) {
    // generate a random digit between 0 and 9
    let digit = Math.floor(Math.random() * 10);

    // add this digit to the mobile string
    mobile = mobile + digit;
}

console.log(mobile);
