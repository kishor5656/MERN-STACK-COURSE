// document.addEventListener('keydown' ,function(event){
//     event.preventDefault();
//     console.log(event.key);
// });

// let button = document.getElementById('button');
// button.addEventListener('click' ,function(event){
//     alert('button clicked')
// });

// button.removeEventListener('click' ,function(event){
//     alert('button clicked')
// });


const add = (x,y) =>x+y;
const square = x => x*x;

console.log(add(1,4));
console.log(square(4));

const evenoddcheck = x => {
    if(x % 2 == 0){
        return 'number is even';
        
    }
    else{
        return 'number is odd';
        
    }
}
console.log(evenoddcheck(4));