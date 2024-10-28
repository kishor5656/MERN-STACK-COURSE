let length = 0;
let s = 'abbcabd';
let sampleset = new Set();
for (let i = 0; i < s.length; i++) {
    if (sampleset.has(s[i])) {

    } else{
        sampleset.add(s[i])
    }
}
console.log(sampleset);
