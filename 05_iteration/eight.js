const myNum = [1, 5, 3]

/*const myTotal = myNum.reduce((acc, curVal) => {
    console.log(`acc : ${acc}, curVal : ${curVal}`);
    
    return acc + curVal
}, 0)*/

const myTotal = myNum.reduce((acc,curVal) => acc + curVal, 10)

//console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);



