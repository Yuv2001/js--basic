//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name= "yuv"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser ={
    email:"dbskh@google.com",
    fullname: {
        userfullname:{
            firstname: "yuvraj",
            lastname: "gupta"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2)// it is a static method 


//console.log(obj3);

const users = [
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));



const course = {
    coursename:" lakadbaga",
    price:100,
    courseInstructor:"yuvraj"
}

//course.courseInstructor

const {courseInstructor : Instructor}= course

//console.log(courseInstructor);

console.log(Instructor);

//{
  //  "name": "yuvraj",
    //"coursename": "monty",
    //"price": "free"
//}


[
    {},
    {},
    {}
]