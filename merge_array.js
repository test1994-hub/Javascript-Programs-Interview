let arr1 = [1,2,3]
let arr2 = [4,5,6]

function mergeArrays(arr1, arr2){
    let merge = []

    for (let i of arr1){
        merge.push(i)
    }
    for (let j of arr2){
        merge.push(j)
    }
    return merge
    }

console.log(mergeArrays(arr1,arr2))

//I created a new array called merge to hold the combined elements. 
// I used two separate loops to iterate through each input array (arr1 and arr2) 
// and push their elements into the merge array. 
// Finally, I returned the merged array containing all elements from both input arrays.