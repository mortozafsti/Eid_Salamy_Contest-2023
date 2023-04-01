// const numbers = [1,6,2,7,3,8,4,9,5,10];
// const newArray = [];

// for(let i = 0; i < numbers.length; i++){
//     if( numbers[i] <= 5){
//         newArray.push(numbers[i]+10)
//     }else{
//         newArray.push(numbers[i])
//     }
// }
const numbers = [1,6,2,7,3,8,4,9,5,10];
const newArray = [];
numbers.map((e => {
    if(e <= 5){
        newArray.push(e+10)
    }else{
        newArray.push(e)
    }
}))
console.log(newArray)
// for(let i = 0; i < numbers.length; i++){
//     if(i % 2 === 0){
//         newArray.push(numbers[i]+10)
//     }else{
//         newArray.push(numbers[i])
//     }
// }
//for( let i = 0; i<numbers.length; i++){
// console.log(newArray);

//}
// 11,6,12,7,13,8,14,9,15,10
//const newArray = [1,6,2,7,3,8,4,9,5,10];