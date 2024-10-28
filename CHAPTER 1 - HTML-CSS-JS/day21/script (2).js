let words = ["The", "quick", "brown", "fox", "jumpsddd", "over", "the", "lazy", "dog"];

let largest=''

for (let i = 0; i < words.length; i++) {

    if (largest.length<words[i].length) {
        largest = words[i];
    }

};

console.log(largest);
