const numbers = [11,2,7,15,10];
const target = 9;

for(let i = 0; i < numbers.length; i++){
    for(let j = i + 1; j < numbers.length; j++){
        if(numbers[i] + numbers[j] === target){
            console.log(numbers[i],numbers[j]);
        }
    }
}