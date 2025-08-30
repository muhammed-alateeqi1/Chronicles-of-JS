// ======================
// 1. String
// ======================
let surname = "Al-Ateeqi";
let greeting = 'Hello';
let message = `Welcome, ${surname}!`; // template literal
console.log(surname);     // Al-Ateeqi
console.log(greeting); // Hello
console.log(message);  // Welcome, Al-Ateeqi!


// ======================
// 2. Number
// ======================
let age = 25;
const pi = 3.14;
let infinityVal = Infinity; 

let notANumber = NaN;
console.log(age);         // 25
console.log(pi);          // 3.14
console.log(infinityVal); // Infinity
/*
--- About Infinity ---
- The Infinity property is a numeric value that signifies infinity.
- It is of the number data type.
- It is commonly used to represent values that exceed the floating-point range or when dividing a number by 0.
- It can be accessed without creating an instance.
- Its value cannot be changed.
- It behaves as infinity in mathematical operations.
*/
console.log(notANumber);  // NaN



// ======================
// 3. Boolean
// ======================
let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn); // true
console.log(isAdmin);    // false


// ======================
// 4. Undefined
// ======================
let x;
console.log(x); // undefined (no value assigned)


// ======================
// 5. Null
// ======================
let y = null;
console.log(y); // null


// ======================
// 6. Symbol (unique value)
// ======================
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false (symbols are always unique)


// ======================
// 7. BigInt (for very large integers)
// ======================
let big = 1234567890123456789012345678901234567890n;
console.log(big);         // 1234567890123456789012345678901234567890n
console.log(typeof big);  // bigint
