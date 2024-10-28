let numbers = [0,1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(arr) {
    const frequency = [];
    const uniqueArray = [];    
    for (let i = 0; i < arr.length; i++) {
        if (!frequency[arr[i]]) {
            frequency[arr[i]] = 1;
            uniqueArray.push(arr[i]);
        }
    }    
    return uniqueArray;
}
console.log(removeDuplicates(numbers));

