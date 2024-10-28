function longestpalindrome(s) {
    let start = 0;
    let maxlength =0;
    function expand(left,right) {
        while (left>=0 && right<s.length && s[left]===s[right]) {
            const length = right-left+1;
            if (length>maxlength) {
                start=left
                maxlength=length
            }
            left--;
            right++
        }
    }
    for (let i = 0; i < s.length; i++) {
        expand(i,i)
        expand(i,i+1)        
    }
    return s.slice(start,start+maxlength)
}

const string ='babad'

console.log(longestpalindrome(string));
