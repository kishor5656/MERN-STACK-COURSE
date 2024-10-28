// function greet(name) {
//     return `hello,${name}`;
// }

// function sayhello(greet,name){
//     const greetings = greet(name);
//     console.log(greetings);
    
// }

// sayhello(greet,'jesvin');
// sayhello(greet,'kishor');

const add = (a,b) => a+b;
const multiply = (a,b) => a*b;

const composedfn = x => {
    const added = add(x,5);
    const multiplied = multiply(added,2);
    return multiplied;
};

console.log(composedfn(5));