//Find second highest element in an array

let arr = [1,43,453,65,321,9,23,999]

function secondhighest(arr){
//-Infinity is smaller than all numbers.

    let highest = -Infinity
    let second = -Infinity

//Pseudocode:
//Initialize highest and second to -Infinity

//Iterate through the array to find the highest and second highest elements
//If current element (i) is greater than highest, update second to highest and 
// highest to current element which is i

//If current element (i) is greater than second and less than highest ->
//update second to current element which is i
//return second 

for (let i of arr){
    if (i > highest){
        second = highest
        highest = i
    } else if (i > second && i < highest){
     
        second = i
    }} 
    return second
}

console.log(secondhighest(arr))

//Second smallest element in an array

let arr2 = [1, 43, 453, 65, 321, 9, 23, 999];

function secondSmallest(arr2) {

//When finding the smallest number, we want to start with the highest possible value so that any real number in the array will be smaller.

//Infinity is larger than all numbers.
    let smallest = Infinity;
    let second = Infinity;

    // Iterate through the array
    for (let i of arr2) {
        if (i < smallest) {
            // Update both smallest and second smallest
            second = smallest;
            smallest = i;
        } else if (i > smallest && i < second) {
            // Update only second smallest
            second = i;
        }
    }

    return second;
}

console.log(secondSmallest(arr2)); // Output: 9
