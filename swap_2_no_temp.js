// swap_2_no_temp.js

let var1 = 'Kishore';
let var2 = 'Kumar';

console.log("Before swap:");
console.log("var1 =", var1);
console.log("var2 =", var2);

// swap using destructuring
[var1, var2] = [var2, var1];

console.log("After swap:");
console.log("var1 =", var1);
console.log("var2 =", var2);


//2.without built in method
let var1 = 'Kishore';
let var2 = 'Kumar';     
var1 = var1 + var2; // var1 now holds 'KishoreKumar'
var2 = var1.substring(0, var1.length - var2.length); // var2 now holds 'Kishore'
var1 = var1.substring(var2.length); // var1 now holds 'Kumar'   
console.log("After swap:");
console.log("var1 =", var1);
console.log("var2 =", var2);    

//number swap no temp
let a = 10;
let b = 20;

a = a + b;   // Step 1
b = a - b;   // Step 2
a = a - b;   // Step 3

console.log("a =", a);
console.log("b =", b);
