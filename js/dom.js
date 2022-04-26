document.getElementById("test").innerHTML = "Hello world";
// document.getElementsByTagName("p");
var z = document.getElementsByClassName("demo")
z[0].innerHTML = "value"
// console.log(document.getElementById("test"))

var v = document.querySelectorAll("p.class1")
v[1].innerHTML ="node value"

var d = new Date();

// document.getElementById("test").innerHTML = "2+2" //string
// document.getElementById("test").innerHTML = 2+2 //number
// document.getElementById("test").innerHTML = d //var 

var x = document.getElementById("test");
x.innerHTML = "hello world";

function myFunc(){
    x.style.color = "blue";
}

var y = document.getElementById("myImg");
function funcOn(){
    y.src = "img/pic_bulbon.gif"
}
function funcOff(){
    y.src = "img/pic_bulboff.gif"
}



// on mouse over
function myMouse(){
    console.log('hello')
}

// on load event
function myOnload(){
    // funcOn()
    console.log('loading')
}

// on mouse up
function mU(){
    funcOff()
}
// on mouse down
function mD(){
    funcOn()
}

function myAnimation(){
    let id = null;
    const elem = document.getElementById("cdiv");
    let pos =0;
    clearInterval(id)
    id = setInterval(frame,5)
    function frame(){
        if(pos == 350){
            clearInterval(id)
        }else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}