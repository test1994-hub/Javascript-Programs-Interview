//factorial = 3*2*1 = 6

factorial = (number) =>{
//number = 1 because 1 is the base case for factorial.
    if (number === 1){
        return 1
    }
    return number * factorial(number - 1)

//return number * factorial(number - 1) is the recursive call to the factorial function.
}

console.log(factorial(5))

//In this code, we define a function called factorial that takes a number as an argument. 
// The function uses recursion to calculate the factorial of the given number. 
// If the number is 1, it returns 1 (base case). Otherwise, it multiplies the number 
// by the factorial of (number - 1) until it reaches the base case. 
// Finally, we call the factorial function with the argument 5 and log the result, 
// which will be 120 (5*4*3*2*1).