const string = "Sometimes to love someone, you got to be a stranger";

let capitalizedWords = string.split(' ').map(word =>{
    return word.charAt(0).toUpperCase() + word.slice(1);
})

console.log(capitalizedWords.join(' '));


