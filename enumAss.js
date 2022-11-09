var Status;
(function (Status) {
    Status[Status["pending"] = 0] = "pending";
    Status[Status["Active"] = 1] = "Active";
})(Status || (Status = {}));
console.log(Status.pending);
console.log(Status.Active);
console.log(Status[1]);
console.log(Status[0]);
console.log(Status);
var Speed;
(function (Speed) {
    Speed[Speed["Slow"] = 30] = "Slow";
    Speed[Speed["FAst"] = 100] = "FAst";
    Speed[Speed["Medium"] = 50] = "Medium";
})(Speed || (Speed = {}));
console.log(Speed[100]);
console.log(Speed[50]);
console.log(Speed);
var Snacks;
(function (Snacks) {
    Snacks[Snacks["Chips"] = 0] = "Chips";
    Snacks[Snacks["Popcorns"] = 1] = "Popcorns";
    Snacks[Snacks["Potatochips"] = 2] = "Potatochips";
})(Snacks || (Snacks = {}));
console.log(Snacks);
console.log(Snacks.Chips);
console.log(Snacks.Popcorns);
console.log(Snacks.Potatochips);
