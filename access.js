var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            // format 
            return this._userName; // encaptulation in notebook session 8
        },
        set: function (name) {
            if (name == "Codemind") {
                this._userName = name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.display = function () {
        console.log(this._userName);
    };
    return Student;
}());
var objStudent = new Student();
objStudent.name = "Codemind";
console.log(objStudent.name);
// for running use tsc --target es5 access.ts
