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
var Managnment = /** @class */ (function () {
    function Managnment() {
    }
    Managnment.prototype.display = function () {
        console.log("Event mmanagnment For Birthday");
    };
    return Managnment;
}());
var Organizer = /** @class */ (function (_super) {
    __extends(Organizer, _super);
    function Organizer(Id, name) {
        var _this = _super.call(this) || this;
        _this.Id = Id;
        _this.name = name;
        return _this;
    }
    Organizer.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("".concat(this.Id, " ").concat(this.name, " "));
    };
    return Organizer;
}(Managnment));
var Even = /** @class */ (function (_super) {
    __extends(Even, _super);
    function Even(Id, name, description, starttime) {
        var _this = _super.call(this) || this;
        _this.Id = Id;
        _this.name = name;
        _this.description = description;
        _this.srarttime = starttime;
        return _this;
    }
    Even.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("".concat(this.Id, " ").concat(this.name, " ").concat(this.description, " ").concat(this.srarttime));
    };
    return Even;
}(Managnment));
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    function Venue(Id, name, description, starttime, address) {
        var _this = _super.call(this) || this;
        _this.Id = Id;
        _this.name = name;
        _this.description = description;
        _this.srarttime = starttime;
        _this.address = address;
        return _this;
    }
    Venue.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("".concat(this.Id, " ").concat(this.name, " ").concat(this.description, " ").concat(this.srarttime, " ").concat(this.address));
    };
    return Venue;
}(Managnment));
var display = new Array(new Organizer(12, "Nisha Pande"), new Even(12, "Nisha Pande", "Event For Birthday Celebration", "7-10 night"), new Venue(12, "Nisha Pande", "People Gathered at location", "Exact time is 70.30", "Near Nisarg Hotel"));
//for of loop
for (var _i = 0, display_1 = display; _i < display_1.length; _i++) {
    var emp = display_1[_i];
    emp.display();
}
