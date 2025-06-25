const user = {
    name : "lucky",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.name}, welcome to the website`);
        console.log(this);
        
        

    } 
}

//user.welcomeMessage()
user.name = "freak"
//user.welcomeMessage()

//console.log(this);

//function chai() {
//    let userName = "lucky"
//    console.log(this.userName);
    
    
//}

//chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
    let username = "hitesh"
    console.log(this);
}

//chai()

/*const addTwo = (num1, num2) => {
    return num1 + num2 ;
}*/

//const addTwo = (num1, num2) => (num1 + num2);

//const addTwo = (num1, num2) => num1 + num2
//console.log(addTwo(10, 151));

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))
