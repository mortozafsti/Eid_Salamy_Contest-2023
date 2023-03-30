const numbers = [4,2,7,1,8];
let smallestNumber = numbers[0];

for(let i = 1; i < numbers.length; i++){
    if(numbers[i] < smallestNumber){
        smallestNumber = numbers[i];
    }
}
console.log(smallestNumber);