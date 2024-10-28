function binary(arr, target) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return 'item not found'
}

let ar = [1, 2, 3, 4, 5, 7, 8, 11, 13]
let target = 7;
let left = 0;
let right = ar.length - 1;
console.log(binary(ar, target));

