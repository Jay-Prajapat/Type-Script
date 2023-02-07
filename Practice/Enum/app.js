var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Readonly"] = 1] = "Readonly";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {}));
;
var person = {
    name: 'Jay',
    age: 21,
    hobbies: ['Playing Tabla', 'Music'],
    role: Role.Admin
};
console.log(person.name);
if (person.role === Role.Admin) {
    console.log(person.name + " is admin");
}
else {
    console.log("is not admin");
}
