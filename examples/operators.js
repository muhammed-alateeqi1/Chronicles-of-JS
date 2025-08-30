// ======================
// 1. Arithmetic Operators
// ======================
console.log("Arithmetic Operators:");
console.log(5 + 2);   // 7
console.log(5 - 2);   // 3
console.log(5 * 2);   // 10
console.log(5 / 2);   // 2.5
console.log(5 % 2);   // 1 (remainder)
console.log(2 ** 3);  // 8 (exponentiation)


// ======================
// 2. Comparison Operators
// ======================
console.log("\nComparison Operators:");
console.log(5 == "5");   // true (loose equality)
console.log(5 === "5");  // false (strict equality)
console.log(5 != "5");   // false (loose inequality)
console.log(5 !== "5");  // true (strict inequality)
console.log(7 > 5);      // true
console.log(7 < 5);      // false
console.log(5 >= 5);     // true
console.log(4 <= 5);     // true


// ======================
// 3. Logical Operators
// ======================
console.log("\nLogical Operators:");
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false


// ======================
// 4. Assignment Operators
// ======================
console.log("\nAssignment Operators:");
let x = 10;
console.log(x);    // 10
x += 5;  // x = x + 5
console.log(x);    // 15
x -= 3;  // x = x - 3
console.log(x);    // 12
x *= 2;  // x = x * 2
console.log(x);    // 24
x /= 4;  // x = x / 4
console.log(x);    // 6
x %= 5;  // x = x % 5
console.log(x);    // 1


// ======================
// 5. Unary Operators
// ======================
console.log("\nUnary Operators:");
let y = 5;
console.log(+ "10"); // 10 (convert string to number)
console.log(-y);     // -5 (negation)

console.log(y++);    // 5 (post-increment → return first, then add 1)
console.log(y);      // 6
console.log(++y);    // 7 (pre-increment → add first, then return)

console.log(y--);    // 7 (post-decrement)
console.log(y);      // 6
console.log(--y);    // 5 (pre-decrement)

console.log(typeof "Muhammed"); // "string"
console.log(typeof 123);   // "number"

// delete
let person = { name: "Ali", age: 25 };
delete person.age;
console.log(person); // { name: "Ali" }

// void
console.log(void 123);  // undefined

// ======================
// 6. Ternary Operator
// ======================
console.log("\nTernary Operator:");
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"
