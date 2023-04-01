const userPost = [
    "I am waiting for all of my #friends",
    "They are enjoying their #weekend",
    "can't wait for #vacation for going to #beach"
];

const hashtags = new Set();

for(let post of userPost){
    //console.log(post);
    const words = post.split(" ");
   // console.log(words);
    for(let word of words){
        // console.log("====="+word);
        if(word.startsWith("#")){
            hashtags.add(word.slice(1));
        }
    }
}
console.log(hashtags)
