// ============================
// Conditional Statements in JavaScript
// ============================

// 1. if statement (basic condition)
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}

// ----------------------------

// 2. if...else (two branches)
age = 15;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are under 18.");
}

// ----------------------------

// 3. if...else if...else (multiple conditions)
let grade = 85;
if (grade >= 90) {
  console.log("Excellent!");
} else if (grade >= 75) {
  console.log("Good job!");
} else if (grade >= 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}

// ----------------------------

// 4. Real Example: Odd / Even check
let number = 7;
if (number % 2 === 0) {
  console.log(`${number} is Even`);
} else {
  console.log(`${number} is Odd`);
}

// ----------------------------

// 5. Real Example: Simple Login Check
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("🔓 Login successful!");
} else {
  console.log("🔒 Invalid username or password.");
}

// ----------------------------

// 6. switch statement (days of the week)
let day = 7;
switch (day) {
  case 1:
    console.log("Saturday");
    break;
  case 2:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  case 4:
    console.log("Tuesday");
    break;
  case 5:
    console.log("Wednesday");
    break;
  case 6:
    console.log("thursday");
    break;
  case 7:
    console.log("Friday");
    break;
  default:
    console.log("Unknown day");
}

// ----------------------------

// 7. switch statement (Browser detection example)
let browser = "Chrome";

switch (browser) {
  case "Chrome":
    console.log("Fast and popular browser");
    break;
  case "Firefox":
    console.log("Privacy focused browser");
    break;
  case "Edge":
    console.log("Microsoft's browser");
    break;
  default:
    console.log("Unknown browser");
}

// ----------------------------

// 8. Ternary Operator (shorthand if...else)
age = 20;
let message = age >= 18 ? " Adult" : " Minor";
console.log(message);

// ----------------------------

// 9. Ternary Operator (Even / Odd example)
let num = 10;
let type = num % 2 === 0 ? "Even" : "Odd";
console.log(`${num} is ${type}`);
