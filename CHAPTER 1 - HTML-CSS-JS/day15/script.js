// document.getElementById("button").addEventListener('click', function(){    
    
//     alert("Button clicked");
// });

// document.getElementById("newform").addEventListener('submit' ,function(event){
//     event.preventDefault();
//     alert('form submitted');
// });

// document.getElementById("newform").addEventListener('submit' ,function(event){
//     event.preventDefault();
//     alert('form submitted');
// });

// let keylog = document.getElementById('inputbro');
// keylog.addEventListener('input',function print(){
//     console.log(keylog.value);
// }
// )   


let color = document.getElementById('selectbro');
color.addEventListener('change' , function(){
    let bc = document.getElementById('box');
    bc.className=color.value;
})
