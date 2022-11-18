class Calculator {
  static calName: string = "Calculator";

  display() {
    Calculator.calName = "Addition of 10 and 20";
    console.log(Calculator.calName);
    console.log(10 + 20);
    Calculator.calName = "Substration of 20 and 5";
    console.log(Calculator.calName);

    console.log(20 - 5);
    Calculator.calName = "Multiplication of 5 and 10";
    console.log(Calculator.calName);
    console.log(5 * 10);
    Calculator.calName = "Division of 100 and 10";
    console.log(Calculator.calName);
    console.log(100/10);
    
  }
}

var objcheck = new Calculator(); //instance
//accessing  property of static of the class give the name of class.property
console.log(Calculator.calName);
objcheck.display();
