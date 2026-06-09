
let arr = [5,2,8,1,4]

//Ascending toward left
    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            if (arr[i] > arr[j]){
                //swap arr[i] and arr[j]

                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp

            }
        }
    }
console.log(arr)

//Descending toward right
for (let i=0; i<arr.length; i++){
    for (let j=i+1; j<arr.length; j++){
        if (arr[i] < arr[j]){
            //swap arr[i] and arr[j]
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
console.log(arr)

//I used nested loops to compare each element with the rest. 
// If the order was wrong, I swapped them. This way, smaller elements gradually moved 
// to the left, and larger ones to the right. After all passes, the array is sorted. 
// The logic is simple: compare → swap → repeat until sorted.