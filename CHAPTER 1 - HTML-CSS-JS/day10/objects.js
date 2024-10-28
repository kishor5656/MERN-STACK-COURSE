// let person ={
//     firstName:'john',
//     lastName:'wick',
//     age:'22',
//     hobbies:['reading','running'],
//     address:{
//         street:'123 main st',
//         city:'auston',
//         country:'india',
//     },
//     fullName: function(){
//         return this.firstName + ' ' + this.lastName;
//     },
// }


// console.log(person.fullName());
// console.log(person.age);
// console.log(person.hobbies);
// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person.address.country);

// person.email = 'johnwick@gmail.com';

// console.log(person.email);


let person ={
    name:'alice',
    age:'22',
    hobbies:['reading','painting'],
    address:{
        street:'wall street',
        city:'auston',
        country:'australia',
    },
}

const {name,age,hobbies} = person;

console.log(name);
console.log(age);
console.log(hobbies);

const {address:{street,city,country}} = person;

console.log(street);
console.log(city);
console.log(country);
