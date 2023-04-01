
const strings = ["Habib","Hasibs","Rakib","Payel","Zihan"];
const largestString = strings[0];

for(let i = 1; i < strings.length; i++){
    if(strings[i].length > largestString.length){
        largestString = strings[i];
    }
}

console.log(largestString) 