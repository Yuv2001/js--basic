const accountId =11442
let accountEmail="yuvraj@gmail.com"
var accountPassword="123"
accountCity="delhi"

//accountId=2 // not allowed
accountEmail="rc@hc.com"
accountPassword="3652"
accountCity= "goa"
let accountState;

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail,accountPassword,accountCity,accountState])