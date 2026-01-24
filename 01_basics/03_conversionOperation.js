let score="33"

// to know type
//console.log(typeof score); //string
//console.log(typeof(score)) //string
let valueInNumeber=Number(score)
//console.log(typeof valueInNumeber); // number

let score1="33ab"

let valueInNumeber1=Number(score1)
//console.log(typeof valueInNumeber1)  //Number
//console.log(valueInNumeber1) //NaN

let score2=null

let valueInNumeber2=Number(score2)
//console.log(typeof valueInNumeber2)  //Number
//console.log(valueInNumeber2) //


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


//*************operations******

let value=3
let negValue=-value
//console.log(negValue); \\-3

// console.log(2*2);
// console.log(2/2);
// console.log(2+2);
// console.log(2-2);
// console.log(2**2);
// console.log(2%2);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);   12
// console.log(1 + "2");    12
// console.log("1" + 2 + 2); 122
// console.log(1 + 2 + "2");  32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); //1
// console.log(+""); //0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2


let gameCounter = 100
++gameCounter;
console.log(gameCounter);
