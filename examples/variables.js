
// ======================
// VAR: function-scoped
// ======================
var personalName = "Ali";
console.log(personalName); // Ali
var personalName = "Omar" 
console.log(personalName); // Omar

// ======================
// LET : blocked-scoped
// ======================

let age = 20;
age = 21 
console.log(age); // 21

// ======================
// CONST : block-scope and immutable 
// ======================

const pi = 3.14;
// pi = 3.14159; // Error: Assignment to constant variable
console.log(pi);
