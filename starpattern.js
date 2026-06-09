let rows = "5"

for (let i=1; i<=rows; i++){
    let out = ""

    for (let j=1; j<=rows-i; j++){
        out += " "
    }


    for (let k=1; k <= (2*i-1); k++){
        out += k
    }
        
//  if (i%2==0){
//     console.log(0);
// }
//  else{s

//     console.log(1);
// }
//console.log(i%2)

//out = out + '*'

console.log(out)
//process.stdout.write(out)

}