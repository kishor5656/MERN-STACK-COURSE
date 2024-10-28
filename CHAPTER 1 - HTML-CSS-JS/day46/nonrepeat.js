string = 'orange';
freq=[];


function nonrepeat(str,freq) {
    for (const letter of string) {
        if (freq.includes(letter)) {
            return false;
        } else{
            freq.push(letter)
        }
    }
    return true
}

console.log(nonrepeat(string,freq));
