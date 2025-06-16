/**************************Object literals**************************************/

const sym = Symbol("key1")

const user = {
    name : "Lucky",
    "full name" : "Lucky kumar",
    [sym] : "myName",
    age : 19,
    location : "Delhi",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Sunday"]
}

//console.log(user);
//console.log(user.isLoggedIn);
//console.log(user.lastLoginDays);

//console.log(user["name"]);
//console.log(user["full name"]);

//console.log(user[sym]);
//Object.freeze(user)
//user.name = "Noida";
//console.log(user);

user.greeting = function(){
    console.log("Hello javascript");
}

user.greetingTwo = function(){
    console.log(`Hello javascript, ${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingTwo());







