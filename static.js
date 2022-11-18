var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        Check.bankname = "BoB";
        console.log(Check.bankname);
        Check.custoername = "xyz";
        console.log(Check.customername);
    };
    Check.bankname = "Bank Of India";
    return Check;
}());
var objcheck = new Check();
var bankname = Check.bankname;
console.log(bankname);
objcheck.display();
