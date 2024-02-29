// object declare 2 type literal and construstor

// single ton only construstor
// object.create


//  object literals

const mysym = Symbol("key1")

const JsUser = {
    name : "Yuvraj",
    "full name": "yuvraj gupta",
    age: 20,
    location: "jaipur",
    [mysym] : "mykey1",
    email: "yuvraj@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["monday","wed"]

}


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);


JsUser.email ="yuvraj20@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "yuvraj@cht.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingtwo = function(){
    console.log(`Hello Js user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());

