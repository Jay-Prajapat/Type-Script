enum Role {Admin, Readonly, Author};

const person = {
    name: 'Jay',
    age: 21,
    hobbies: ['Playing Tabla','Music'],
    role: Role.Admin
};

console.log(person.name);

if(person.role === Role.Admin){
    console.log(person.name + " is admin");
}
else{
    console.log(person.name + "is not admin");
}