// function removeDuplicates(arr){
//     if (arr.lenght === 0)return arr;

//     let uniqueIndex =0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] !== arr[uniqueIndex]) {
//             uniqueIndex++;
//             arr[uniqueIndex]=arr[i];
//         }        
//     }
//     return arr.slice(0, uniqueIndex + 1);
// }

// const sortedArray =[1, 2, 2, 3, 4, 4, 5];

// const arrayWithoutDuplicates= removeDuplicates(sortedArray);
// console.log(arrayWithoutDuplicates);


let numbers = [0,1, 2, 2, 3, 4, 4, 5];uu
function removeDuplicates(arr) {
    const seen = [];
    const uniqueArray = [];    
    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            seen[arr[i]] = 1;
            uniqueArray.push(arr[i]);
        }
    }    
    return uniqueArray;
}
console.log(removeDuplicates(numbers));

