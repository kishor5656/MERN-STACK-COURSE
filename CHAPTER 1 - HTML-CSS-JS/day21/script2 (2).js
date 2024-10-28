array= [1, 3, 4, 5]

for (let i = 0; i < array.length; i++) {
    if (i+1 !== array[i]){
        console.log('missing number is ', i+1);
        break;
    }
}