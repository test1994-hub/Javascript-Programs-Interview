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

