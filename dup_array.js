//Remove duplicates from an array

//by using below methods:
//1. Using new Set() - A Set is a collection of unique values. When you create a Set from an array,
// it automatically removes duplicates.

//2.filter() - The filter() method creates a new array with all elements that pass the test 
// implemented by the provided function. We can use it to check if the index of the 
// current element is the same as the index of its first occurrence in the array, 
// effectively keeping only unique elements.

//3.indexOf() - The indexOf() method returns the first index at which a given element can be found 
// in the array, or -1 if it is not present. We can use it to check if the current element's index 
// matches its first occurrence index.

//4.includes() - The includes() method determines whether an array includes a certain value among 
// its entries, returning true or false as appropriate. We can use it to check if the current 
// element is already included in the result array before adding it.

//1.new Set()

const arr = [1, 2, 3, 4, 4, 5, 5, 6];

const out = [...new Set(arr)]
//put set in an array because set is an object and we want to convert it back to an array
//so putting new set into an array will convert it back to an array with unique values
//... is the spread operator which allows us to spread the elements of the set into the new
//  array

console.log(out) // Output: [1, 2, 3, 4, 5, 6]

//2.filter()/indexOf()
const arr2 = [1,1,1,2,2,2,3,3,3, 4, 5, 5, 6,6,6];
const out2 = arr2.filter((x,index) =>{

    return arr2.indexOf(x) === index
    //indexOf will return the first index of the element x in the array arr2
    //if the current index is the same as the first index, it means it's the first occurrence of that 
    //element so we keep it in the result array, otherwise we skip it
})

3.//Reduce()/includes()

const arr3 = [2, 2, 4, 4, 4, 5, 5, 6];

const out3 = arr3.reduce((acc, curr) =>{

    //acc is the accumulator that will hold the unique values as we iterate through arr3
    //curr is the current element being processed in the array arr3
    //The reduce() method executes a reducer function (that you provide) on each element of the array,
    //resulting in a single output value. In this case, 
    // we are using it to build an array of unique values. 

    //since we added empty array as the initial value of acc, we can safely use includes() to 
    // check if curr is already in acc
    //so first the acc is empty, curr is 2, since acc does not include 2, we push 2 into acc, now acc is [2]
    //next curr is 2 again, since acc already includes 2, we do not push it again, acc remains [2]
    //next curr is 4, since acc does not include 4, we push 4 into acc, now acc is [2,4]

    if(!acc.includes(curr)){
        acc.push(curr)
    }
    return acc;
}, []);

//},[]) - why? - The second argument to reduce() is the initial value of the accumulator (acc).
// In this case, we start with an empty array ([]), which will be used to store the unique values 
// as we iterate through the input array (arr3). If we didn't provide this initial value, 
// the first element of arr3 would be used as the initial value of acc, which would lead to 
// incorrect results and potential errors when trying to call includes() on a non-array value. 
// By providing an empty array as the initial value, we ensure that acc is always an array that 
// can be safely manipulated with methods like includes() and push().

console.log(out3)

//4.ForEach includes():

const arr4 = ["apple", "mango", "apple", "orange", "mango"];
const out4 = [];

//since for each dont return any value, i added the result to out4 array by pushing the unique values into it

arr4.forEach((x, index) =>{
    if(!out4.includes(x))
        out4.push(x)
})
console.log(out4)
