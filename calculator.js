const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const name = prompt("What's your name? ");
console.log(`Hi, I'm ${name}.`);
const number1 = prompt("Type the first number:");
const number2 = prompt("Type the second number:");
const operation = prompt("Type the opperation: ");
let result;
if(isNaN(number1) || isNaN(number2) ){
console.log("the operation is not valid ");
}
else if(operation=="+"){
    result=number1+ +number2;
    console.log(number1, "+", number2, "=", result);
}
else if(operation=="-"){
    result=number1- +number2;
    console.log(number1, "-", number2, "=", result);
}
else if(operation=="*"){
    result=number1* +number2;
    console.log(number1, "*", number2, "=", result);
}
else if(operation=="/"){
    result=number1/ +number2;
    console.log(number1, "/", number2, "=", result);
}

