const x = document.forms["form1"]
console.log(x)
for(let i = 0; i < x.length; i++){
    
    // x.elements[i].style.background = "blue";
}

function oChange(){
    console.log('value')
}
function oKU(){
    console.log('keyup')
}
function oKD(){
    console.log('keydown')
}

function oF(){
    console.log('Focus')
}
function oB(){
    console.log('Blur')
}

function validate(){
    const x = document.forms["form1"]["first"];
    if(x.value == ""){
        x.style.border = "4px solid red"
        return false;
    }else{
        return true
    }
    
}
window.onload = function(){
    console.log('load')
}