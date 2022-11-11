//program for average calculate
console.log("=======Grade calculator=====");
console.log("Mats,Physics ,Chemistry");
var num1 = 60;
var num2 = 70;
var num3 = 80;
console.log("1.Student Got Mrks=".concat(num1, ", ").concat(num2, ", ").concat(num3));
var Average = num1 + num2 + num3;
var Average1 = (Average / 3);
console.log("Average mark is===".concat(Average1));
if (Average1 <= 70) {
    console.log("You Got Grade C");
}
var n1 = 95;
var n2 = 80;
var n3 = 69;
console.log("2.Student Got Mrks=".concat(n1, ", ").concat(n2, ", ").concat(n3));
var Average1 = n1 + n2 + n3;
var Average2 = (Average1 / 3);
console.log("Average mark is===".concat(Average2));
if (Average2 <= 90) {
    console.log("You Got Grade B");
}
var a1 = 95;
var a2 = 95;
var a3 = 90;
console.log("2.Student Got Mrks=".concat(a1, ", ").concat(a2, ", ").concat(a3));
var Average2 = a1 + a2 + a3;
var Average3 = (Average2 / 3);
console.log("Average mark is===".concat(Average3));
if (Average3 > 90) {
    console.log("You Got Grade A");
}
