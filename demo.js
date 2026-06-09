/* const person = {

    name: "kishore",
    age: 29,

fullName (){

        return `${this.name} + ${"kumar"}` 

    }
}

const person1 = {
    year(){
        return new Date().getFullYear() - this.age
    },

}

Object.assign(person,person1)

console.log(person.year()) */

//array of objects

/* const foods = [

    {dish: 'Rice', price: 250},
    {dish: 'Chicken', price: 450},
    {dish: 'Fish', price: 550}
]

for (let i=0; i<foods.length; i++){
    console.log(foods[i].dish)
} */
/* console.log(foods[1].price) */

//Function with parameters

/* function login (username, password){
    console.log('Login ok',username, password)
}

login('kishore', '123') */

//function with return type - Arrow function

/* const add = (a,b)=>{
    return a+b
}
    
console.log(add(10,20)) */

//Producing the promise

const orderCoffee = new Promise ((resolve, reject) =>{
    const coffee =  true

    setTimeout(() =>{
    if(coffee){
        resolve('Hey coffee')
    
    }
    else {
        reject('No coffee')
    }
    },2000)
})
//Consuming the promise

orderCoffee.then((message) =>{
console.log('First customer:', message)

//Optional chaining of promise

return new Promise ((resolve, reject) => {
    resolve('Pay Bill 20USD')
})})
.then((bill) => {
    console.log(bill)
})

.catch((message) =>{
console.log(message)
})

.finally(() => {
    console.log('Thanks for visting')

})

//Async

const getUser = async () => {
    return 'kishore'
}

getUser().then ((user) => {
    console.log('User 1:', user)
})

//Async await
const main = async () => {
  const user = await getUser();
  console.log('User 2:', user);
}
main();

