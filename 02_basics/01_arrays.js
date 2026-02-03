// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) //0-6
// myArr.push(7) //0-7
// myArr.pop()  //0-6

// myArr.unshift(9) //9 0 1 2 3 4 5 6 7 8
// myArr.shift()

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(3)); //3

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr); //0,1,2,3,4,5


// slice, splice

console.log("A ", myArr); //A [0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3) 

console.log(myn1);  //12
console.log("B ", myArr); //0123456


const myn2 = myArr.splice(1, 3) 
console.log("C ", myArr); //045
console.log(myn2); // 123