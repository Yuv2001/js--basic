const score = 500
console.log(score);

const another = new Number(200)
console.log(another); 

console.log(another.toString().length);
console.log(another.toFixed(3));

const otherNumber = 563.5255

console.log(otherNumber.toPrecision(4));

const hundreads = 1000000
console.log(hundreads.toLocaleString('en-IN'));


// ++++++++++++++++++++maths++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4,3,9,6));
console.log(Math.max(4,3,9,6));


console.log(Math.random());

console.log((Math.random()*10)+1);

console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max =20
console.log(Math.floor(Math.random() * (max-min+1)) +min);