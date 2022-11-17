interface IMobile{
    Device:string;
    Color:string;
    Storage_Capacity:string;

}
interface IMobile1{
 Key_Futures: string;
 Memory:any;


}
interface Mobile2 extends IMobile,IMobile1{
    Price:number;
    Size:any;
}
var Mobile:Mobile2={
Price:50000,
 Size:'17.30 cm',
 Device:"Galaxy S22 Ultra",
 Color:'Phantom Gray',
 Storage_Capacity:"256 GB ",
 Key_Futures:"4 nm Processor",
 Memory:'portable SSD T7 Shield',
 

}
console.log(Mobile);
