var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.work = function () {
        console.log("Person Details");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fname, lname, salary) {
        var _this = _super.call(this) || this;
        _this.fname = fname;
        _this.lname = lname;
        _this.salary = salary;
        return _this;
    }
    Student.prototype.work = function () {
        _super.prototype.work.call(this);
        console.log("".concat(this.fname, " ").concat(this.lname, " ").concat(this.salary));
    };
    return Student;
}(Person));
var Employe = /** @class */ (function (_super) {
    __extends(Employe, _super);
    function Employe(fname, lname, salary) {
        var _this = _super.call(this) || this;
        _this.fname = fname;
        _this.lname = lname;
        _this.salary = salary;
        return _this;
    }
    Employe.prototype.work = function () {
        _super.prototype.work.call(this);
        console.log("".concat(this.fname, " ").concat(this.lname, " ").concat(this.salary));
    };
    return Employe;
}(Person));
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(fname, lname, salary) {
        var _this = _super.call(this) || this;
        _this.fname = fname;
        _this.lname = lname;
        _this.salary = salary;
        return _this;
    }
    Trainer.prototype.work = function () {
        _super.prototype.work.call(this);
        console.log("".concat(this.fname, " ").concat(this.lname, " ").concat(this.salary));
    };
    return Trainer;
}(Person));
var Work = new Array(new Student("Nilam", "Bhosale", 55000), new Employe("Sumit", "Mali", 47000), new Trainer("Jack", "Mehtre", 60000));
//for of loop
for (var _i = 0, Work_1 = Work; _i < Work_1.length; _i++) {
    var emp = Work_1[_i];
    emp.work();
}
