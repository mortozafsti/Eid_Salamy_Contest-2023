
const numbers = [1,1,2,2,3,3,4,5,6,7,8,9,5,6,4,5];
console.log(numbers);
console.log(numbers.length);
const uniqueNumber = [...new Set(numbers)];
console.log(uniqueNumber)
console.log(uniqueNumber.length);