/* 1. What is scope?
    A variable that is accessible everywhere has global scope, and a variable that can only be accessed in a particular place has local scope.
*/

var varInGlobalScope = 'I am global.';

function funcWithLocalScope() {
    var varInLocalScope = 'I am local.';

    console.log(varInGlobalScope); // Works
    console.log(varInLocalScope); // Works
}

console.log(varInGlobalScope); // Works
console.log(varInLocalScope); // Does not work