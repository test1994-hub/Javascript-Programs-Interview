let name = "kishore"
let found = false

//For First repetive use below for loop
for(let i=0;i<name.length;i++){
//For last repetitive char use below for loop
for(let i=name.length-1;i>=0;i--){
    let count = 0
    
    for (j=0;j<name.length;j++){
        if(name[i]===name[j]){
            count++
        }
    }
    if(count===1){
        console.log('First',name[i])
        found = true
        break
    }

}

//2.Last non repeative word

let name = "kishore";
let found = false;

for (let i = name.length - 1; i >= 0; i--) {
    let count = 0;

    for (let j = 0; j < name.length; j++) {
        if (name[i] === name[j] && i !== j) {
            count++;
        }
    }

    if (count === 0) {
        console.log("Last", name[i]);
        found = true;
        break; // stop at last non-repetitive
    }
}

if (!found) {
    console.log("No non-repetitive character found");
}
//3.Last repeat word
let name = "kishore";
let found = false;

for (let i = name.length - 1; i >= 0; i--) {
    let count = 0;

    for (let j = 0; j < name.length; j++) {
        if (name[i] === name[j] && i !== j) {
            count++;
        }
    }

    if (count > 0) {  // character repeats
        console.log("Last repetitive:", name[i]);
        found = true;
        break; // stop at the last repetitive character
    }
}

if (!found) {
    console.log("No repetitive character found");
}
//4.First repeat word
    
let name = "kishore";
let found = false;

for (let i = 0; i < name.length; i++) {
    let count = 0;

    for (let j = 0; j < name.length; j++) {
        if (name[i] === name[j] && i !== j) {
            count++;
        }
    }

    if (count > 0) {  // character repeats
        console.log("First repetitive:", name[i]);
        found = true;
        break; // stop at the first repetitive character
    }
}

if (!found) {
    console.log("No repetitive character found");
}
