// async function fetchUserData() {
//     try{
//         const response = await fetch("http://date.jsontest.com/");
//         if (!response.ok){
//             throw new Error("network respons not ok")
//         }
//         const data = await response.json();
//         console.log('user data:',data);
//     } catch(error){
//     console.log('there was an error',error);
//     }
// }


// fetchUserData();


function checkNumber(num) {
    return new Promise((resolve,reject) =>{
        console.log('Promise is prending.....');
        setTimeout(() => {
            if (num > 10) {
                resolve("number is greater than 10");

            } else {
                reject('number is 10 or less');
            }
        }, 2000);
    });
}

checkNumber(12)
    .then(result =>{
        console.log(result);
    })
    .catch(error=>{
        console.log(error);
    });

checkNumber(9)
    .then(result =>{
        console.log(result);
    })
    .catch(error=>{
        console.log(error);
    });

