function secondlargest(array) {

    let largest = -Infinity;

    let secondLargest = -Infinity;
    for (let num of array) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }
    return secondLargest !== -Infinity ? secondLargest : null;
}

const array = [3, 5, 7, 3, 8, 2];
console.log(secondlargest(array));


