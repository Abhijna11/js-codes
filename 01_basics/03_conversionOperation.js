let score="33"

// to know type
console.log(typeof score); //string
console.log(typeof(score)) //string
let valueInNumeber=Number(score)
console.log(typeof valueInNumeber); // number

let score1="33ab"

let valueInNumeber1=Number(score1)
console.log(typeof valueInNumeber1)  //Number
console.log(valueInNumeber1) //NaN

let score2=null

let valueInNumeber2=Number(score2)
console.log(typeof valueInNumeber2)  //Number
console.log(valueInNumeber2) //


let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); \\33
// console.log(typeof stringNumber); \\string