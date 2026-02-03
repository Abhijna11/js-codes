// Dates

let myDate = new Date()
// console.log(myDate.toString()); //wed mar 01 2026 gmt+0000
// console.log(myDate.toDateString()); //wed mar 01 2026
// console.log(myDate.toLocaleString()); //3/1/2023, 12;00:00PM
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23) //Mon Jan 23 2023 //0-jan
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() 

// console.log(myTimeStamp); // 167739994889595 milisecconds
// console.log(myCreatedDate.getTime()); //milliseconds
// console.log(Math.floor(Date.now()/1000)); // devide by 1000& math.floor

let newDate = new Date()
console.log(newDate); //yyyy mm dd
console.log(newDate.getMonth() + 1); // 1 2 3 4 
console.log(newDate.getDay()); // 1 2 3 4

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
