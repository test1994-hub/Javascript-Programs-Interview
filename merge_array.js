// Step 1: Define two arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Step 2: Create an empty array to hold merged values
let merge = [];

// Step 3: Copy elements of arr1 into merge
for (let i of arr1) {
  merge.push(i);
}

// Step 4: Copy elements of arr2 into merge
for (let j of arr2) {
  merge.push(j);
}

// Step 5: Print the merged array
console.log("Merged array:", merge);

//I created a new array called merge to hold the combined elements. 
// I used two separate loops to iterate through each input array (arr1 and arr2) 
// and push their elements into the merge array. 
// Finally, I returned the merged array containing all elements from both input arrays.