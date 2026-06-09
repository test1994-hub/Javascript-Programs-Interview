let n1 = 0, n2 = 1

// 0,1,1,2,3,5,8,13,21,34

//n1+n2 is the n3 (0+1 is 1)
let n = 20

console.log(n1)
console.log(n2)
function fibonacci(n) {
for (let i=3; i<=n; i++){
    //since i want n fibonacci numbers - so i put i<=n here
    //since already i gave n1 and n2 - so i start with i= 3

    let n3 = n1+n2
    console.log(n3)
    n1 = n2
    n2 = n3
}
}
fibonacci(n)

//The Fibonacci sequence is a series of numbers where each number is the sum of the 
// two preceding ones, 
// usually starting with 0 and 1. In this code, we initialize the first 
// two numbers (n1 and n2) 
// and then use a loop to calculate the next numbers in the sequence up to the 10th 
// number. 
// Each new number (n3) is calculated as the sum of n1 and n2, and then we update n1 
// and n2 for the next iteration.