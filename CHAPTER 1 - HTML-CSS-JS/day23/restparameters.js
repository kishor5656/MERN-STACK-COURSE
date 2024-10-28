// function collect(...materials){
//     return materials;
// }


// console.log(collect('sand','cement','water'));


function combine(...merge) {
    return merge.flat();
}


const arr1=[1,2];
const arr2=[3,5,6];
const arr3=[8,9];

console.log(combine(arr1,arr2,arr3));
