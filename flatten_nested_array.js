
let arr1 = [1, 2, [3, 4], [5, 6, [7, 8]], 9]
//Output = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//Steps:
//1. Use the flat() method to flatten the nested array. 
//2. The flat() method creates a new array with all sub-array elements concatenated into it
//  recursively up to the specified depth. 
//3. By default, the depth is 1, but we can specify a higher depth to flatten deeper nested 
// arrays. 

let output = arr1.flat(2)
console.log(output)

//2.without built in method

let arr = [1,2,[3,4],[5,6],[7,8],[9]];
let result = [];

function flat(arr) {
    for (let item of arr) {          // go through each element
        if (Array.isArray(item)) {   // if element is an array
            flat(item);              // call the same function again
        } else {
            result.push(item);       // if not array, just add to result
        }
    }
}

flat(arr);
console.log(result); // [1,2,3,4,5,6,7,8,9]



