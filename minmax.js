//Find min and max value in an array - without usinmg built in math functions?

//1.Start by assuming the first element (arr[0]) is both the min and max.

//2.Loop through the rest of the array:

//3.If the current element is smaller than min, update min.

//4.If the current element is larger than max, update max.

//5.At the end, min holds the smallest value, max holds the largest.

let arr = [22,54,42,12, 9]

let min = arr[0] // assume first element is min
let max = arr[0] // assume first element is max

for (let i=1; i<arr.length; i++){

    if(arr[i] < min){
        min = arr[i] // update min if smaller found
    }
    if (arr[i] > max){
        max = arr[i] // update max if larger found
    
    }
    }
console.log("Min:", min)
console.log("Max:", max)

//2.Find min & max value in object array?
