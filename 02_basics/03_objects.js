// singleton //by construxtor
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "abhijna",
    "full name": "abhijna nayak",
    [mySym]: "mykey1",  //if no square bracket it will not be treated as symbol
    age: 18,
    location: "mangalore",
    email: "abhijna@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //email
// console.log(JsUser["email"]) //emaaail
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "abhijna@chatgpt.com"
// Object.freeze(JsUser) //cannot change
JsUser.email = "abhijna@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());