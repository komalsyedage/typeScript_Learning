var array:any=["Javascript","HTML","TypeScript","BootStrap","Java",".Net"];
var index:number;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}
//traverse
console.log("Even Positioned=====");
var array:any=["0.Javascript","1.HTML","2.TypeScript","3.BootStrap","4.Java","5.Net"];
for (let index = 0; index < array.length; index++) {
if (index%2==0) {
    console.log(array[index]);
    
}

}
console.log("Odd Positioned======");
for (let index = 0; index < array.length; index++) {
    
    if (index%2!=0) {
        console.log(array[index]);
        
    }
}