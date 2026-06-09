
//Write a function for Anagram 

//Pseudocode:
//An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. 
//To check if two strings are anagrams, we can follow these steps:

//1. Clean the strings: Remove any spaces and convert both strings to lowercase 
// to ensure the comparison is case-insensitive and ignores spaces.

//2.Character mapping: Create a frequency map (or count) for each character in both strings.
//obj1 = {a:1, p:2, l:1, e:1} for "apple"
//obj2 = {p:2, a:1, l:1, e:1} for "papel"

//3.Iterate through an object and compare with other object 
//4.if both are eqaul return true else false

function builCharMap(str){

    const cleanStr = str.replace(/[^a-zA-Z0-9]/gi,"").toLowerCase();
    let charMap = {}

    for (let char of cleanStr){
        charMap[char] = charMap[char] +1 || 1
    }


    return charMap
}

//for of loop is used to iterate =  arrays, strings, maps, sets, etc. 
//for in loop is used to iterate =  objects

function anagram(str1, str2){

    const obj1 = builCharMap(str1)
    const obj2 = builCharMap(str2)

    //compare both objects
    //so that we can check the lenght of both objects and if they are not equal 
    // then we can return false
    //before looping - we can decide it by lenght of both objects
    //So using Object constructor and .keys method we can get the keys of both objects 
    // and check the length of both objects

    if (Object.keys(obj1).length !== Object.keys(obj2).length){
        return false
    }
    for (let i in obj1){
        if (obj1[i] !== obj2[i]){
            return false
        }
    }
    return true
}
console.log(anagram("listen", "silent")) // true
console.log(anagram("hello", "world")) // false

//Another way to check anagram is to sort both strings and compare them

//Psuedocode:
//string1 -> LowerCase() -> turn to array (split("")) -> sort() -> turn sorted array to
//  string by join("")
//string2 -> LowerCase() -> turn to array (split("")) -> sort() -> turn sorted array 
// to string by join("")
//compare both sorted strings and return true if they are equal else false
