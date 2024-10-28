// async function fetch() {
//     try {
//         let response = await fetch('https://api.example.com');
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('error fetching  data:', error);
//     }
// };

// fetch();

// function validateAge(age){
//     if (age<18) {
//         throw new Error('age must be 18 or above');
//     }
//     return true
// }
// try {
//     console.log(validateAge(16));
// } catch (error) {
//     console.error('error',error);
// }

try{
    let x = 10;
    x.someMethod();
}catch(error){
    console.error(`${error}`);
}