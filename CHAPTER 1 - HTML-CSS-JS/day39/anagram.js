function groupAnagram(strings) {
    const anagramMap = new Map();
    
    for (let str of strings) {
        const sortedStr = str.split('').sort().join('');
        if (!anagramMap.has(sortedStr)) {
            anagramMap.set(sortedStr, []);
        }
        anagramMap.get(sortedStr).push(str);
    }

    return Array.from(anagramMap.values());
}

const strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagram(strings));