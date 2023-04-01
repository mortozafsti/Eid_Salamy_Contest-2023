const number = [1,2,3,4,5,6,7];
let sum = 0;

for(let i = 0; i < number.length; i++){
    sum += number[i];
}
console.log("Total Sum is: " + sum);
const result = `${sum} / ${number.length} = ${sum / number.length}`;
// const average = result / number.length;
console.log(result);