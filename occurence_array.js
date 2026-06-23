//Question:

//Count the occurences in the given input:
//Frequency characters or numbers in an array
//[2,2,2,3,3,4,5,5,5,5]

//Output: {"2":3,"3":2,"4":1,"5":4}

//Answer:

const arr = [2, 2, 2, 3, 3, 4, 5, 5, 5, 5];
const result = {};

for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]] === undefined) {
        result[arr[i]] = 1;   // first time we see the number
    } else {
        result[arr[i]]++;     // increment if already exists
    }
}

console.log(result); // { '2': 3, '3': 2, '4': 1, '5': 4 }

//The output will be: { '2': 3, '3': 2, '4': 1, '5': 4 }
