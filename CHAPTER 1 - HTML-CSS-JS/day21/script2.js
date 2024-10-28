function isanagram(str1, str2) {
    if (str1.length != str2.length) {
        return false
    }
    let arr1 = str1.replace(/\s/g,'').split('').sort().join('');
    let arr2 = str2.replace(/\s/g,'').split('').sort().join('');
    arr1 == arr2 ? console.log('is anagram') : console.log('not anagram');
}
isanagram('note','tone');