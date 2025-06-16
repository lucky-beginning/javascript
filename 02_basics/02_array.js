const marvel = ["Ironman", "Spiderman", "Vision", "Wanda"]
const DC = ["Superman", "Batman", "Aquaman", "Flash"]

//marvel.push(DC);
//console.log(marvel[4][2]);

//const allHeros = marvel.concat(DC)
//console.log(allHeros);

//const allHeros = [...marvel, ...DC]
//console.log(allHeros);

//const arr = [1,2,3,4,[5,6,7],[8,9,10,[11,12,13]]]
//const realArr = arr.flat(Infinity)
//console.log(realArr);

console.log(Array.isArray("Lucky"));
console.log(Array.from("Lucky"));
console.log(Array.from({name : "Lucky"})); //DOUBT

let score1 = 100
let score2 = 500
let score3 = 1000
let score4 = 60000

console.log(Array.of(score1, score2, score3, score4));



