function findNonRepeatingChar(str) {
    let charFrequency = new Map();
    for(const char of str){
        charFrequency.set(char ,(charFrequency.get(char)||0)+1)
    }
    for (const char of str) {
        if (charFrequency.get(char)===1) {
            return char
        }
    }
}

const word = 'loop';

console.log(findNonRepeatingChar(word));
