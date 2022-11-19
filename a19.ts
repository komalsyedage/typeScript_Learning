class  Managnment{

    public Id:number;
    public  name:string;
     public description:string;
     public srarttime:number;
     public address:string;
    public display() : void {
        console.log("Event mmanagnment For Birthday");
        
    }  


}
class Organizer extends Managnment {
    constructor(Id: number,name:string){
        super();
   this.Id=Id;
   this.name =name;


    }
    public display() : void {
        super.display();
        console.log(`${this.Id} ${this.name} `);
        
    }  

}
class Even extends Managnment{
    constructor(Id: number,name:string,description: string,starttime:any){
super();
this.Id=Id;
this.name=name;
this.description=description;
this.srarttime=starttime;
    }
public display() : void {
    super.display();
    console.log(`${this.Id} ${this.name} ${this.description} ${this.srarttime}`);
    
    }
}
class   Venue extends Managnment{
    constructor(Id: number,name:string,description: string,starttime:any,address:string){
super();
this.Id=Id;
this.name=name;
this.description=description;
this.srarttime=starttime;
this.address=address;
    }
public display() : void {
    super.display();
    console.log(`${this.Id} ${this.name} ${this.description} ${this.srarttime} ${this.address}`);
    
    }
}

let display: Managnment[] = new Array(
    new Organizer(12, "Nisha Pande"),
    new Even(12, "Nisha Pande", "Event For Birthday Celebration","7-10 night"),
    new Venue(12, "Nisha Pande", "People Gathered at location","Exact time is 70.30","Near Nisarg Hotel")
  );
  //for of loop
  for (var emp of display) {
    emp.display();
  }
  
