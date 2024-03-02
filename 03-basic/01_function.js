

function sayMyName() {
    console.log("Y");
    console.log("U");
    console.log("V");
    console.log("R");
    console.log("A");
    console.log("J"); 
}


sayMyName()

/*function addTwoNumber(number1,number2) { //parameter

    console.log(number1+number2);
}*/

//addTwoNumber(8,5) // argument
function addTwoNumber(number1,number2) { //parameter
    //let result = number1+number2    
    //return result
    //console.log("yuvraj");// after ie tŕurn any thing can't be print
    return number1+number2
}
const result = addTwoNumber(8,5)
//console.log( "Result: ", result);

function longingUser(username) {
    return `${username} just logged in`
    
}



//console.log(longingUser("yuvraj"));

console.log(longingUser());
