function myFunc(name,age,cinc){
    console.log(name, age, cinc)
} 

// variable scope
const g ="value"; //global variable
var h = "value";
console.log(g.length)

function addFunc(x,y){

    let xx = 'jsh'; //local variable
    // y = x+y;
    console.log(x+y)
    // return g;
}


myFunc('My Name is Atif',24,1232456);
console.log(addFunc(50,30));


// alert('This is an alert');
// confirm("Are You sure?");

var value1 = prompt("Please Enter Value 1", "123");
console.log(Date())


// document.getElementById("myDiv").innerHTML = addFunc(10, 30);
