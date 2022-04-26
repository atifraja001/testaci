let arr = ["val1","val2","val3","val4"];
let arr2 = ["val1","val2","val3","val4","vsd"];
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// let y = 5
// for(let x = y; x<=10; x++){
//     console.log("2*" +x+ "=" +x*2)
// }

// for(let x = 10; x > 0; x--){
//     console.log(x)
// }

// console.log(arr.length)

// for(let x = 0; x <= arr.length; x++){

//     console.log(arr2[x])
// }

var x = 5;

for(var x = 0; x <= 10; x++){
// some code
}

console.log(x)

// function myFunc(x,y,z){
//     console.log(x*y,z)
// }

// myFunc(2,3,"this is z");

const obj ={
    name: "userName",
    age: 20,
    class: "one"
}

// for in loop
// for(var key in obj){
//     // test += key
//     console.log(`key in obj ${key}`)
//     console.log(obj[key])
// }

// for(var x in arr){
//     console.log(x)
//     console.log(arr[x])
// }

// forEach loop
let arr3 = ["val1","val2","val3","val4"];
arr3.forEach(myFunc);

function myFunc(x,y,z){
    // console.log(x)
}

// for of loop
let txt = "text"
for(let x of txt){
    // console.log(x)
}

// while loop
let b =0;
// while(b < 10){
//     console.log(`this number is ${b}`);
//     b++;
// }

// do{
//     console.log(`this number is ${b}`);
//     b++;
// }while(b < 10)


// math function
// console.log(Math.PI)
// console.log(Math.round(4.4))
// console.log(Math.ceil(3.5))
// console.log(Math.floor(-4.2))
// console.log(Math.trunc(4.2))
// console.log(Math.sign(4))
// console.log(Math.E)
console.log(Math.floor(Math.random()*100000)) //


var x = 3;
var y = 2;

x += y; //x = 5
y = x-y //y = 3
x = x-y //x = 2

var x = "did";