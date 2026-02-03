const name = "abhijna"
const repoCount = 50

// console.log(name + repoCount + " Value");

//string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('abhijna-hc-com')

// console.log(gameName[0]); //a
// console.log(gameName.__proto__);// {}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //h
console.log(gameName.indexOf('h')); //2

const newString = gameName.substring(0, 4) // abhi no negative
console.log(newString);

const anotherString = gameName.slice(-8, 4) //jna
console.log(anotherString);

const newStringOne = "   abhijna    "
console.log(newStringOne);
console.log(newStringOne.trim()); //"abhijna"

const url = "https://abhijna.com/abhijna%20nayak"

console.log(url.replace('%20', '-')) //https://abhijna.com/abhijna-nayak"

console.log(url.includes('sundar')) //false

console.log(gameName.split('-')); abh



/*
stack-primitive , heap-non primitive

*/