//Arrays and Objects
const arr = [1,2,3,4];

//foreach map filter reduce find indexOf

arr.forEach((ele)=>{
    console.log(ele+" Hellow");
})

//map
//it return new array with newer value.
const ans = arr.map((e)=>{
    return 13;
})
console.log(arr);
console.log(ans);

//filter

const newans = arr.filter((e)=>{
    return e>=1;
})

console.log(newans);

//reduce 

const newThing = arr.reduce((p,c)=>{
    return p+c;
},0)

console.log("sum of all element  : ",newThing);


//find 

const f = arr.find((e)=>{
    return e==2;
})

console.log(f);

//indexOf

//-1 when no data found

const fi = arr.findIndex((e)=>{
    return e==2;
})

console.log(fi);


//Objects

let user = {
    "name":"Ashwin",
    "Age":19,
    "Role":"Intern"
}

//iterate objects
for (const key in user) {
    console.log(key+"=>"+user[key]);
}

//function of length
//number of parameters is length of function

function sum(a,b){
    return a+b;
}

console.log(sum.length);
console.log(sum(5,4));

//async javascript 

//need of await 

async function ashwin()
{
    const ans2 = await fetch(`https://randomuser.me/api/`);
const res = await ans2.json();

console.log(res.results[0]);
}


ashwin();