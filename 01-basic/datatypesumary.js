// premitive

// 7 types: String , Number , boolean, null, undefined, Symbol, BigInt

const score =100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id=== anotherId);

//const bigNumber = 56846644654989654n

//Refrence (Non primitive)

// Array , Object, Functions


const heros =["iron","doctor","thor"];

let myObj ={
    name: "yuvraj",
    age: 23,
}


const myFunction = function(){
    console.log("my world");
}


console.log(typeof bigNumber);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myname ="yuvraj.com"

let anothername = myname
anothername = "gupta"

console.log(myname);
console.log(anothername);

let userOne= {
    email:"yuvraj@com",
    upi: " lp@ybl"

}

let userTwo= userOne
userTwo.email = "yuvraj@goole.com"

console.log(userOne.email);
console.log(userTwo.email);