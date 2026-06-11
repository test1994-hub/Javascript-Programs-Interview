let num = 153; // output as 153

// Armstrong check

    let numstr = num.toString().length; // number of digits
    let temp = num;
    let sum = 0;

    while (temp > 0) {
        let remainder = temp % 10; // last digit
        temp = Math.floor(temp / 10); // remove last digit

        sum = sum + Math.pow(remainder, numstr); // digit^digits
    }

    if (sum === num) {
        console.log(num, "is an Armstrong number");
      
    } else {
        console.log(num, "is NOT an Armstrong number");
        
    }