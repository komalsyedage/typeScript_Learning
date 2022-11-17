interface IProduct {
    id:number;
    name:string;
    description?:string;//if we dont want these property
    price:number  // declartion only in interface.
  display():void;
}


var objProduct : IProduct = {
    id : 121,
    name: "Android",
  
    price: 50000,// I have given implementation for IProduct interface
    display():void{
        console.log(this.id+" "+this.name);
        
    }
}
