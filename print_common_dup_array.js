//print common and duplicates in an array - js no built in

let arr = [1,2,3,4,5,6,7,8,9,10,1,2,3]

//Step:1 - create an empty array to store the count of each number
let count = []

for (let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] === arr[j]){
             // Check if already recorded in duplicates
             let alreadyAdded = false;

             for(let k=0; k<count.length; k++){
                if(count[k] === arr[i]){
                    alreadyAdded = true;
                    break;
                }   
             }
             if(!alreadyAdded){
                count.push(arr[i]);
             }
        }

    }}
// Step 2: Print duplicates
console.log("Duplicates: " + count);

// Step 3: Print common elements (duplicates are essentially common values)
console.log("Common elements: " + count)

//🔍 Explanation
//Outer loop (i) → picks each element.

//Inner loop (j) → compares with all later elements.

//If a match is found → check if already in duplicates (manual check with another loop).

//If not already added → push into duplicates.

//Finally → print duplicates (these are also the common elements).