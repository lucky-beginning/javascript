//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = 123544
tinderUser.name = "Lucky"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularuser = {
    email : "lucky1617032",
    fullName :{
        userFullName : {
            firstName : "lucky",
            lastName : "kumar",
        }
    }
}

//console.log(regularuser.fullName.userFullName.firstName);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

//const obj3 = {...obj1, ...obj2} METHOD ONE;
//const obj3 = {obj1, obj2} WRONG METHOD;

//const obj3 = Object.assign({}, obj1, obj2) METHOD TWO;
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com" // Doubt //
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
//console.log(users);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

 //course.courseInstructor

const {courseInstructor: instructor} = course

 console.log(courseInstructor);

 /******************************** WATCH VIDEO AGAIN**************************/
