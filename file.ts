 export class Passenger{
    fname: string;
    lname:string;

    constructor(fname: string, lname:string){
 this.fname=fname;
 this.lname=lname
    }
    add(){
        console.log(this.fname+" "+this.lname);
        
    }
}