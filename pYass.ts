class Person {
  public fname: string;
  public lname: string;
  public salary: number;

  public work(): void {
    console.log("Person Details");
  }
}
class Student extends Person {
  constructor(fname: string, lname: string, salary: number) {
    super();
    this.fname = fname;
    this.lname = lname;
    this.salary = salary;
  }
  public work(): void {
    super.work();
    console.log(`${this.fname} ${this.lname} ${this.salary}`);
  }
}
class Employe extends Person {
  constructor(fname: string, lname: string, salary: number) {
    super();
    this.fname = fname;
    this.lname = lname;
    this.salary = salary;
  }
  public work(): void {
    super.work();
    console.log(`${this.fname} ${this.lname} ${this.salary}`);
  }
}
class Trainer extends Person {
  constructor(fname: string, lname: string, salary: number) {
    super();
    this.fname = fname;
    this.lname = lname;
    this.salary = salary;
  }
  public work(): void {
    super.work();
    console.log(`${this.fname} ${this.lname} ${this.salary}`);
  }
}

let Work: Person[] = new Array(
  new Student("Nilam", "Bhosale", 55000),
  new Employe("Sumit", "Mali", 47000),
  new Trainer("Jack", "Mehtre", 60000)
);
//for of loop
for (var emp of Work) {
  emp.work();
}
