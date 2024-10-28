let myMap=new Map();
//set the key value in map
myMap.set('name','Alice');
myMap.set('age',30);
myMap.set('occupation','Developer');

// get the values using the key 

myMap.get('name');

//check if exists

myMap.has('occupation');
myMap.has('salary');

myMap.size;

for(let key of myMap.keys()){
    console.log(key);
}

for(let value of myMap.values()){
    console.log(value);
}

for(let [key,value] of myMap.entries()){
    console.log(`${key}:${value}`);
    
}