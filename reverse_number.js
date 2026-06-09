//let num1 = 34456; //output as 65443
//num.to String() // "34456" - convert the number to a string so that we can manipulate it as text
// split('') // [3,4,4,5,6] - split with empty string will split each character into an array element
// .reverse() // [6,5,4,4,3]
// .join('') // "65443" - join with empty string will concatenate the array elements into a 
// single string

//let reversenum = num.toString().split('').reverse().join('')
//console.log(reversenum)



//2.Without built in method
let num = 34456; //output as 65443

function reverseNumber(num) {
    let result = ""
    for (let digit of num.toString()){
        result = digit + result
    }
return result

}
console.log(reverseNumber(num))

//3.reverse string
// let char = 'Apple'
// function reverseString(str) {
//     let result =""
//     for (let char of str.toLowerCase()){
//         result = char + result
//     }
//     return result
// }
// console.log(reverseString(char))

//4.reverse an array without in built in method
// let arr = [1,2,3,4,5]
// function reverseArray(arr){
//     let result = []  
//     for (let i = arr.length -1; i >= 0; i--){
 // let ch = arr[i]

//         result[result.length] = ch
//     }
//     return result
// }
// console.log(reverseArray(arr))


//5.Reverse string with keeping whitespace 
//lopp will consider whitespace as a character and reverse it along with other characters.

//let str = " K i s h o r e";  // input string
//let result = "";             // to store reversed string

// loop through each character from end to start
//for (let i = str.length - 1; i >= 0; i--) {
   // result += str[i];        // add each character to result
//}

//console.log(result);  // Output: "e r o h s i K "
