// function addnums(number) {
//     while (number > 10) {
//         let sum = 0;

//         while (number > 0) {
//             sum += number % 10;
//             number = Math.floor(number / 10)

//         }
//         number = sum;
//     }
//     return number;
// }

// console.log(addnums(12345));



function sumOfDigits(number) {
    let sum = 0;
    
    while (number > 0) {
        sum += number % 10; // Add the last digit to the sum
        number = Math.floor(number / 10); // Remove the last digit
    }
    number = sum
    return sum;
}

// Example usage:
let number = 12345;
console.log(`The sum of the digits of ${number} is ${sumOfDigits(number)}`);
