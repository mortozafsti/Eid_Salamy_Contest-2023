const objs = {
    name:'mortoza',
    age:30,
    city:'New Work',
    marks:[45,35,65]
};

const test = Object.entries(objs);
console.log(test[1][1]);
// 11,6,12,7,13,8,14,9,15,10
const newArray = [1,6,2,7,3,8,4,9,5,10];
const result = newArray.map((e) => {
    if(e>5){
        e+10;
    }
})
console.log(result);
