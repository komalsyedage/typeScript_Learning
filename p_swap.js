function dislpay(a1, a2) {
    console.log("Before Swap===".concat(a1, ",").concat(a2));
    var temp = a1;
    a1 = a2;
    a2 = temp;
    console.log("After Swap====".concat(a1, ",").concat(a2));
}
dislpay("Komal", "Sitaram");
