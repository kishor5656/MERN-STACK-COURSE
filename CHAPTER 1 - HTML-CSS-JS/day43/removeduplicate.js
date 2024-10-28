let arr= [1, 1, 2, 3, 3, 4, 4, 5, 5]

function removeDups(arr) {
    const seen= [];
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            seen[arr[i]] = 1;
            uniqueArray.push(arr[i]);
        }
    }    
    return uniqueArray.length;
}



console.log('the lenght of array without duplicates is ',removeDups(arr));




