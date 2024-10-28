function largestSubstringWithKDistinct(s, k) {
    let left = 0;
    let right = 0;
    let maxLength = 0;
    const charCount = new Map();

    while (right < s.length) {
        charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);
        while (charCount.size > k) {
            charCount.set(s[left], charCount.get(s[left]) - 1);
            if (charCount.get(s[left]) === 0) {
                charCount.delete(s[left]);
            }
            left++;
        }
        maxLength = Math.max(maxLength,right-left+1)
        right++;  
    }
    return maxLength;
}

const s = "eceba";
const k = 2;
console.log(largestSubstringWithKDistinct(s, k));  
