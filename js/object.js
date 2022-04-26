// objects
let car = {
    first: "Qasim",
    last: "Ali",
    fullName: function(){
        return this.first+ " " + this.last;
    }
};

// function
function myNum(){
    console.log('Your age')
}
// console.log(car.fullName())

// conditions
var age = 18;
if(age > 18 || age < 20)
{
    // && 1 1 = 1, 0 1= 0, 1 0= 0, 0 0 = 0
    // || 1 1 = 1, 0 1= 1, 1 0= 1 , 0 0 = 0
    // ==
    // ===
    // !=
    // !==
    // > , >= , < ,<=

    // when true
    alert('You are Not Allowed');
}else if(age < 19 && age > 17){
    // when false
    alert('Your age is under 20')
}else if(age === 20){
    myNum()
}else{
    alert('else')
}

// date
var d =new Date()
console.log(d.getDay())
let day;
switch(d.getDay()){
    case 0:
        day = "sun";
        break;
    case 1:
        day = "mon";
        break;
    case 2:
        day = "tue";
        break;
    case 3:
        day = "wed";
        break;
    default:
        day = "don\'t know";
        break;
}
// console.log(day);

// array
let arr = ["val1","val2"];
let arr2 = ["val3","val4"];
let arr4 = ["val33","val34"];
// arr.push('link')
// console.log(arr)
// let arr2 = arr.pop()
arr3 = arr.concat(arr2,arr4)
//  arr3.splice(3,3,"valu3","vl","22")
let s = arr3.toString();
console.log(s)
let a = s.split(",")
console.log(a);
let x = 20
if(x<=20){
    // action

}else if(x <= 21){
    // action
}
else{
    // action
}

