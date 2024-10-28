s = 'abcabcbb';

function lengthOfLargestSubstring(s) {
    let left = 0;
    let right = 0;
    let maxlength =0;
    const uniqueChar=new Set();
    while (right<s.length) {
        if (!uniqueChar.has(s[right])) {
            uniqueChar.add(s[right]);
            maxlength=Math.max(maxlength,(right-left+1))
            right++;
        }else{
            uniqueChar.delete(s[left]);
            left++;
        }
    }
    return maxlength;
}

console.log(lengthOfLargestSubstring(s));

