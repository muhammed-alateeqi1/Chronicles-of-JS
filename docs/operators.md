# Operators in JavaScript

Operators are special symbols used to perform operations on values and variables.  
They are the core building blocks for calculations, comparisons, and logical expressions.  

---

## 1. Arithmetic Operators ➕➖✖️➗
Used for mathematical calculations.

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `+`      | Addition | `5 + 2` | `7` |
| `-`      | Subtraction | `5 - 2` | `3` |
| `*`      | Multiplication | `5 * 2` | `10` |
| `/`      | Division | `5 / 2` | `2.5` |
| `%`      | Modulus (remainder) | `5 % 2` | `1` |
| `**`     | Exponentiation | `2 ** 3` | `8` |

---

## 2. Comparison Operators ⚖️
Used to compare values. They return a **boolean** (`true` or `false`).

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `==`  | Equal (loose, type conversion) | `5 == "5"` | `true` |
| `===` | Strict equal (no type conversion) | `5 === "5"` | `false` |
| `!=`  | Not equal (loose) | `5 != "5"` | `false` |
| `!==` | Strict not equal | `5 !== "5"` | `true` |
| `>`   | Greater than | `7 > 5` | `true` |
| `<`   | Less than | `7 < 5` | `false` |
| `>=`  | Greater or equal | `5 >= 5` | `true` |
| `<=`  | Less or equal | `4 <= 5` | `true` |

---

## 3. Logical Operators 🔗
Used to combine or invert boolean values.

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `&&` | AND → true if both are true | `(true && false)` | `false` |
| `||` | OR → true if at least one is true | `(true || false)` | `true` |
| `!` | NOT → inverts the value | `!true` | `false` |

---

## 4. Assignment Operators 📝
Used to assign values to variables.

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `=`  | Assign | `x = 5` | `x = 5` |
| `+=` | Add and assign | `x += 3` | `x = x + 3` |
| `-=` | Subtract and assign | `x -= 2` | `x = x - 2` |
| `*=` | Multiply and assign | `x *= 2` | `x = x * 2` |
| `/=` | Divide and assign | `x /= 2` | `x = x / 2` |
| `%=` | Modulus and assign | `x %= 2` | `x = x % 2` |

---

## 5. Unary Operators 🔄
Work on a single operand.

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `+` | Converts to number | `+"5"` | `5` |
| `-` | Negates the value | `-5` | `-5` |
| `++` | Increment | `let x = 5; x++` | `6` |
| `--` | Decrement | `let x = 5; x--` | `4` |
| `typeof` | Returns type | `typeof "Ali"` | `"string"` |
| `typeof`   | Returns type of operand | `typeof "Ali"` → `"string"` |
| `delete`   | Removes a property from an object | `delete obj.prop` |
| `void`     | Evaluates expression but returns `undefined` | `void 0` → `undefined` |

---

## 6. Ternary Operator ❓
A shorthand for `if...else`.

```javascript
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"
```
## Example
See: [../examples/operators.js](../examples/operators.js)
