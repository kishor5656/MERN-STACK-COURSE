function areAnagrams(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1.length !== str2.length) {
      return false;
    }
    const charCount = new Map();
    for (let char of str1) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (let char of str2) {
      charCount.set(char, (charCount.get(char) || 0) - 1);
    }
    for (let count of charCount.values()) {
      if (count !== 0) {
        return false;
      }
    }
  
    return true;
  }
  console.log(areAnagrams('listen', 'silent'));
  console.log(areAnagrams('hello', 'world'));