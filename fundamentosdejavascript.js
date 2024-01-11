/*
Difference between var and let
 - var was introduced since the beginning 
 - let was introduced es2015/es6
 - let has a block (will die when the block is defined or garbage collected)
 - var has a function scope
 - var gets hoisted while let is not
*/ 

let x = function () {
    if (true) {
        //console.log(v);
        //console.log(l); it's not defined
        var v = 2;
        var l = 1;
    }
    console.log(v);
    console.log(l);
}

x();

/* Difference between == and ===
 - == compares values
 - === compares values and types
*/

if ('1' == 1) {
    (true) // same value
} 

if ('1' === 1) {
    (false) // different type
}
