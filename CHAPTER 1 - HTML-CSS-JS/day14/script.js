function remove(){

    let parent = document.getElementById('parent');
    let child = document.getElementById('child');
    parent.removeChild(child);



}

function replace(){
    
    let parent = document.getElementById('parent');
    let child = document.getElementById('child');
    let newChild = document.createElement('h1');
    newChild.textContent='new heading';
    parent.replaceChild(newChild,child);
}