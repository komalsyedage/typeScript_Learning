var Status;
(function (Status) {
    Status[Status["pending"] = 0] = "pending";
    Status[Status["Active"] = 1] = "Active";
})(Status || (Status = {}));
console.log(Status.pending);
console.log(Status.Active);
