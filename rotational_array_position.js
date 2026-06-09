 let arr = [1,2,3,4,5]

 let d = 2 // rotate by left by 2

 let rotated = arr.slice(d).concat(arr.slice(0, d))

 //why slice(0,d) -> because we want to take the first d elements from the array 
 // and concatenate them at the end of the rotated array.
    console.log(rotated)

    //2. right rotation

    let arr2 = [1,2,3,4,5]
    let d2 = 2 // rotate right by 2

    let rotated2 = arr2.slice(-d2).concat(arr2.slice(0, -d2))

    console.log(rotated2)

    //No built in method - manually rotate the array

    let arr3 = [1,2,3,4,5]
    let d3 = 2 // rotate left by 2

    for (let i=0; i<d3; i++){
        let temp = arr3.shift() // remove the first element and store it in temp
        arr3.push(temp) // add the temp element to the end of the array 

    

    }
    console.log(arr3)
