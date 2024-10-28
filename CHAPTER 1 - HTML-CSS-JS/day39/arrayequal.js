function arrayAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let freqCounter1 = new Map();
    let freqCounter2 = new Map();

    for (let key of arr1) {
        freqCounter1.set(key, (freqCounter1.get(key) || 0) + 1);
    }
    for (let key of arr2) {
        freqCounter2.set(key, (freqCounter2.get(key) || 0) + 1);
    }

    for (let [key1, value1] of freqCounter1) {
        if (value1 !== freqCounter2.get(key1)) {
            return false;
        }
    }

    return true;
}

const arr1 = [1, 3, 4];
const arr2 = [1, 2, 4];
console.log(arrayAreEqual(arr1, arr2));