arr = [7, 8, 9, 4, 6, 1, 2, 3, 0];
itm = 6;

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (item === array[i]) {
            // return console.log(`item found at ${i+1}`);
            return i;
        }
    };
    // return console.log("not exists");
    return -1;
};

const postion = linearSearch(arr, itm);

postion === -1 ? console.log("item does'nt exists") : console.log(`item found at index ${postion}`);

