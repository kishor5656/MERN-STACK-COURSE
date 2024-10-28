
function occ(str,ch) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == ch)
            count++;
    }
    console.log(count);
}

occ('malayalam','l');
