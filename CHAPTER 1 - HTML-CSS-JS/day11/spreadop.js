let person = {
    firstName : "john",
    lastName : "wick",
    age : 25,
};

let newPerson = { ...person , city:"new york"};

console.log(newPerson);