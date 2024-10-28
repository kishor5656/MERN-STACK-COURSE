let array = [0, 0, 1];
let newarray = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0 ) {
        newarray.push(array[i]);
    }
}
while (array.length > newarray.length) {
    newarray.push(0);
}


console.log(newarray);
