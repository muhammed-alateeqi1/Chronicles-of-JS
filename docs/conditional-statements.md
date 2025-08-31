# Conditional Statements in JavaScript — Deep Dive 🔥

A practical reference covering all conditional statements in JS, with tricks, common pitfalls, and real-world examples.

---

## 🧭 Quick Map
- `if` → flexible for any condition(s).
- `else if` → multiple branches with priority.
- `switch` → cleaner when comparing **one value** to multiple fixed cases.
- `ternary` → short, elegant version of `if…else` **when returning a value**.

> Before any condition: understand **truthy / falsy** 👇

### 🔦 Truthy / Falsy (super important)
- **Falsy:** `false`, `0`, `-0`, `""` (empty string), `null`, `undefined`, `NaN`
- **Truthy:** everything else → `"0"`, `"false"`, `[]`, `{}`, `function(){}` are all truthy.

```js
if ("0") console.log("runs ");     // string "0" is truthy
if ([]) console.log("runs ");      // empty array is truthy
if (0) console.log("never ");      // 0 is falsy
