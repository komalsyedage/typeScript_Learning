//program for average calculate
console.log("=======Grade calculator=====");
console.log("Mats,Physics ,Chemistry");

var num1:number=60;
var num2:number=70;
var num3:number=80;
console.log(`1.Student Got Mrks=${num1}, ${ num2}, ${num3}`);
var Average:number=num1+num2+num3;
var Average1:number=(Average/3);
console.log(`Average mark is===${Average1}`);


if (Average1<=70) {

    console.log(`You Got Grade C`);
    }
 
    var n1:number=95;
    var n2:number=80;
    var n3:number=69;
    console.log(`2.Student Got Mrks=${n1}, ${ n2}, ${n3}`);
    var Average1:number=n1+n2+n3;
    var Average2:number=(Average1/3);
    console.log(`Average mark is===${Average2}`);
    
    
    if (Average2<=90) {
    
        console.log(`You Got Grade B`);
        }

        var a1:number=95;
        var a2:number=95;
        var a3:number=90;
        console.log(`2.Student Got Mrks=${a1}, ${ a2}, ${a3}`);
        var Average2:number=a1+a2+a3;
        var Average3:number=(Average2/3);
        console.log(`Average mark is===${Average3}`);
        
        
        if (Average3>90) {
        
            console.log(`You Got Grade A`);
            }