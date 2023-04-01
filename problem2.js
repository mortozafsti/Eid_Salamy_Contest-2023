const numbers = [4,2,7,1,8];
let largestNumber = numbers[0];

for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > largestNumber){
        largestNumber = numbers[i];
    }
}
console.log(largestNumber);