class Students {
    private _firstName: string;
    private _lastName: string;

    constructor(fname, lname) {
        this._firstName = fname;
        this._lastName = lname;
    }

    GetFullName(): string{
        return this._firstName + " " + this._lastName;
    }
}

let student1 = new Students("Jay", "Prajapati");
console.log(student1.GetFullName());