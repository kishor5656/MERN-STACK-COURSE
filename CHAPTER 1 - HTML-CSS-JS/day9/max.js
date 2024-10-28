
let array = [1,2,3,8,5,6,7]

let max = 0

for (let i = 0; i < array.length; i++) {
    if (max < array[i])
        max = array[i];
}

console.log(max);

