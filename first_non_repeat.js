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