let userinput : unknown;
let userName : string;

userinput: 25;
userinput: 'Jay';

if(typeof userinput === 'string') {
    userName = userinput;
}

function generateError(message: string, code: number): never{
    throw {message:message, errorCode: code};
}

generateError("An Error Occured", 500);