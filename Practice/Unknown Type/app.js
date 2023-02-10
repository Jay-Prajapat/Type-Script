var userinput;
var userName;
userinput: 25;
userinput: 'Jay';
if (typeof userinput === 'string') {
    userName = userinput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An Error Occured", 500);
