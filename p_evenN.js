var array = ["Javascript", "HTML", "TypeScript", "BootStrap", "Java", ".Net"];
var index;
for (var index_1 = 0; index_1 < array.length; index_1++) {
    var element = array[index_1];
    console.log(element);
}
//traverse
console.log("Even Positioned=====");
var array = ["0.Javascript", "1.HTML", "2.TypeScript", "3.BootStrap", "4.Java", "5.Net"];
for (var index_2 = 0; index_2 < array.length; index_2++) {
    if (index_2 % 2 == 0) {
        console.log(array[index_2]);
    }
}
console.log("Odd Positioned======");
for (var index_3 = 0; index_3 < array.length; index_3++) {
    if (index_3 % 2 != 0) {
        console.log(array[index_3]);
    }
}
