let num = 2

function isEvenorOdd(num){

    if (num % 2 === 0){
        return true
        }
else{
    return false
}
    }

isEvenorOdd(num)

console.log(isEvenorOdd(num) ? `${num} is an even number` : `${num} is an odd number`)
//${} means to insert the value of num into the string. 
// It is called template literals in JavaScript, which allows us to embed expressions 
// inside string literals. 
// In this case, it checks if num is even or odd and returns the appropriate message.