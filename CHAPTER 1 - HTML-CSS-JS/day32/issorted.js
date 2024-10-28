function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}
let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(isSorted(arr));
