var Students = /** @class */ (function () {
    function Students(fname, lname) {
        this._firstName = fname;
        this._lastName = lname;
    }
    Students.prototype.GetFullName = function () {
        return this._firstName + " " + this._lastName;
    };
    return Students;
}());
var student1 = new Students("Jay", "Prajapati");
console.log(student1.GetFullName());
