class Check {
static bankname: string = "Bank Of India";
customername: string;
accno:number;
display(){
    Check.bankname="BoB";
    console.log(Check.bankname);
   
    
    
}
}
var objcheck=new Check();
var bankname=Check.bankname;
console.log(bankname);
objcheck.display();
