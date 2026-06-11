//Find the max number from each string of array:

//Input = ["23-43-65","98-12-100","12-23-239"]
//Output = [65,100,239]

const arr = ["23-43-65","98-12-100","12-23-239"];
 

//Steps:
//1.Split the string by the delimiter '-'
//2.use Math.max(array) to find the maximum number in the array
//3.Use map and return the maximum number for each string in the array

let output = arr.map(el => {

//el is the current element of the array, which is a string like "23-43-65". 
// We want to split this string into an array of numbers.
//map() method creates a new array populated with the results of calling a provided function on 
// every element in the calling array. 

let numbers = el.split('-')
return Math.max(...numbers)
//math.max - use of this function is to find the maximum number from the array of numbers obtained after splitting the string.
//Math.max() function returns the largest of zero or more numbers. 
//We use the spread operator ... to pass the elements of the numbers array as individual arguments 
//to Math.max().

})
console.log(output)

//2. No build in function solution:

const arr = ["23-43-65","98-12-100","12-23-239"];
const result = [];

for (let i = 0; i < arr.length; i++) {
    let str = arr[i];   // take one string at a time
    let num = 0;        // to build numbers digit by digit
    let max = 0;        // to keep track of biggest number

    for (let j = 0; j < str.length; j++) {
        let ch = str[j];   // take one character at a time

        if (ch !== '-') {
            // if it is a digit, add it to current number
            // example: "65" → first '6' → num=6, then '5' → num=65
            num = num * 10 + (ch - '0');
        } else {
            // if we hit a dash, compare current number with max
            if (num > max) {
                max = num;
            }
            num = 0; // reset for next number
        }
    }

    // after loop ends, check last number
    if (num > max) {
        max = num;
    }

    result.push(max); // store the biggest number for this string
}

console.log(result); // [65, 100, 239]

