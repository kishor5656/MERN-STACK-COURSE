function missingNumber(arr,n) {
    const totalSum = (n*(n+1))/2;
    let arrSum = 0;
    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }
    return totalSum - arrSum;
}

array = [1,2,3,5];

console.log(`missing number is:`,missingNumber(array,5));
