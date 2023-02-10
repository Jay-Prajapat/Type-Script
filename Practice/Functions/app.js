function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result ' + num);
}
function addAndHandler(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 6));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
