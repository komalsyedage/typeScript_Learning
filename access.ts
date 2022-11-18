class Student {
  private _userName: string;

  get name() : string {
   // format 
   return this._userName;  // encaptulation in notebook session 8=hide data in perpufully and data bind together

  }
  set name(name: string) {// if want out side class use set and get methods
   if(name == "Codemind") {
      this._userName = name;
   }
   
  }
 display() {
   console.log(this._userName);
 }
}

var objStudent = new Student();
objStudent.name = "Codemind";
console.log(objStudent.name);


 // for running use tsc --target es5 access.ts
