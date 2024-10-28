const array = [1,2,3,4,5];
let max = 0;
let i = 0;
while ( i < array.length) {
    if (max<array[i]) {
        max = array[i];
    }
    i++;
}

console.log(max);
