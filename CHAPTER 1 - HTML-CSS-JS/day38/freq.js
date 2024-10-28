function getFrequency(arr) {
    const frequencyMap = new Map();
    for (const element of arr) {
        if (frequencyMap.has(element)) {
            frequencyMap.set(element, frequencyMap.get(element) + 1);
        } else {
            frequencyMap.set(element, 1);
        }
    }
    return frequencyMap;
}
const arr = [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5];
const frequency = getFrequency(arr);
const freqobj = Object.fromEntries(frequency);
console.log(freqobj);