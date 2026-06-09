//Question:

//Count the occurences in the given input:
//Frequency characters or numbers in an array
//[2,2,2,3,3,4,5,5,5,5]

//Output: {"2":3,"3":2,"4":1,"5":4}

//Answer:

const arr = [2, 2, 2, 3, 3, 4, 5, 5, 5, 5];

const result = {};
//{} empty object is added because we want to store the count of each number as key-value pairs in 
// the object.

for (i=0; i<arr.length; i++){

    if(result[arr[i]]){
        result[arr[i]] += 1;
//if the number already exists as a key in the result object, we increment its count by 1. 
//The syntax result[arr[i]] accesses the value associated with the key arr[i] in the result object
//and +=1 adds 1 to that value.   
    }
    else{
        result[arr[i]]=1;
//if the number does not exist as a key in the result object, we create a new key with the value of 1. 
//The syntax result[i] creates a new key in the result object with the name i (which is the current index of the loop) and assigns it the value of 1.
    }
    }
    console.log(result);
//The output will be: { '2': 3, '3': 2, '4': 1, '5': 4 }
