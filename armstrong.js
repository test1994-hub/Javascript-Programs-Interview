 let num = 153; //output as 153

 function isArmstrong(num){

    //convert nummber to string since we cant manipulate number as text

    let numstr = num.toString().length; //to get the number of digits in the number
    let temp = num; //to store the original number for later comparison
    let sum = 0

    while (temp > 0){
        let remainder = temp % 10; //to get the last digit of the number
        temp = Math.floor (temp/10); //to remove the last digit from the number

        sum = sum + Math.pow(remainder, numstr) //to calculate the sum of the digits raised 
        // to the power of the number of digits    

    }
    console.log(`value of sum is ${sum}`);
    if  (sum === num)
        return true
    else
        return false

}
console.log(isArmstrong(num));
