        // variables and Data Types

        /*
            this is 
            multi-line
            comments
        */ 
            var myNameIsAtif = "";
            var mynameisatif = "";
            var my_name = "";
            var my_Name = "";
            var x = "Nazam"; // String
            var z = 'sha 123 saab'; //String
            var g = 'qasim'; //String
            let y = 123; //Number
            let f = 12.01; // Float/number
            let n = null;  //null
            let b = true; //boolean
            let c = false; //boolean
            var v; //undefined
        
    
            let val1 = 5;
            let val2 = 4;
            var total = val1+val2;
            var t2 = val1-val2;
            var t3 = val1*val2;
            var t4 = val1/val2;
            var f1 = total/2;
            var p = 300/400*100;
            // array 
            const arr = ["Nazam","white",123456789,12345678];
            const arr12 = ["BMW","address",123456,"cinc",arr];
            
            // console.log(arr12[4][1])

            // for(let i=0; i < arr.length; i++){
            //     console.log(arr[i])
            // }

            // object
            let person = { 
                name:'Nazam',
                color:"white",
                CNIC:123456789,
                phone: 12345678,
            }
            let person2 = { 
                name:'Sha Saab',
                color:"white",
                CNIC:123456789,
                phone: 12345678,
            }
            let arr2 = [person,person2]
            // console.log(arr2)
            // console.log(arr2[1]['phone'])
            // for(let i=0; i<arr2.length; i++){
            //     var a = arr2[i];
                
            //     for(k in a){
            //         console.log(a[k])
             //     }

            // }
            var wc = "hello,world this this,world";
            // var abc = wc.split("o")
            // console.log(arr2)
            // console.log(abc)

            // for(let v=0; v<=10; v++){
            //     if(v === 5){
            //         console.log("this is 5")
            //         continue
            //     }
            //     console.log(v)
            // }




            // console.log(arr[0])
            
            // console.log(person.name)
            // console.log(arr2)
            // console.log(arr2[1])
            // console.log(arr2[1]['name'])
    
    
            // console.log("total +"+total)
            // console.log("total - "+t2)
            // console.log(t3)
            // console.log(t4)
            // console.log(f1)
            // console.log(p)
    
            var j = 3
            var q = 5
            // console.log(j,q)

            j += q //j = j+q = 8
            q = j-q // q = 8-5 = 3
            j = j-q // j = j-q = 5

            // console.log(j,q)
// 2*1=2
        // var m = 2;
        //     for(let i=1; i<=10; i++){
        //         console.log("2*"+i+"="+i*2)
        //         // console.log(m+"*"+i+"="+i*m)
        //     }
        function addFunc(x,y){

            let xx = 'jsh'; //local variable
            // y = x+y;
            alert(x+y)
            // return g;
        }
        addFunc(10,10)
        addFunc(50,30)

        const keyboard = {
            name: 'dell',
        };


        function funName(w,r){

            w = w+r // 3+4 =  w = 7
            r = w-r // 7-4 = 3
            w = w-r // 7 - 3 = 4
            return {w,r};
        }
        funName(5,6);