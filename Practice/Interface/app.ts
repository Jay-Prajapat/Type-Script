interface IPersion {
    firstName: string,
    lastName: string
}

var persion1: IPersion = {
    firstName: 'Jay',
    lastName: 'Prajapati'
}

var persion2: IPersion = {
    firstName: 'Rajesh',
    lastName: 'Patel'
}

console.log(persion1.firstName + " " + persion1.lastName);
console.log(persion2.firstName + ' ' + persion2.lastName);
