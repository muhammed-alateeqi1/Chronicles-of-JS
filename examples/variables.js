
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


(function(){
    console.log('IIFE');
    
})();

(()=>{
    console.log('IIFE Arrow Fun');
    
})();

let test = 20
console.log(test);
{
    let test =10;
    console.log(test);
    
}

let y2= 10;
console.log("y2 : ", y2);
 y2= 200;
console.log("y2 : ", y2);


function getAvg(x , y){
    // Avg = Sum / quantity 
    let sum = x + y ;
    let avg = sum / 2;
    return avg;
}
let result = getAvg(100 , 50);
console.log("Avreage : " , result); // 75

