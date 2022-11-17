var data = prompt('Please enter your marks');
console.log(data);
console.log('=============Using function=======>>');
console.log("Maths,Physics,Chemistry marks=95,90,95");
function display(n, n1, n2, n3, n4) {
    if ((n + n1 + n2) >= 90) {
        console.log("".concat(n4, " you got ").concat(n3));
    }
}
display(95, 90, 95, " Grade A", "Yogesh");
console.log("Maths,Physics,Chemistry marks=80,85,84");
display(80, 85, 84, "Grade B", "Rishi");
console.log("Maths,Physics,Chemistry marks=70,60,40");
display(70, 60, 40, "Grade C", "Ninja");
var x = prompt("Enter Your Markx", "67");
var x = prompt("Enter Your Markx", "79");
