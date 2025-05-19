# Node.js Command-Line Calculator

This is a simple calculator application built with Node.js. It runs in the terminal and allows the user to input two numbers and an operator (such as `+`, `-`, `*`, `/`) to perform a basic calculation.

---

## 🗂 Project Structure

```
calculator-app/
├── index.js                   # The main entry point for the app
├── calculator/
│   └── calculator.js          # Contains the logic to perform the calculation
├── utils/
│   └── inputPrompter.js       # Contains the code to prompt the user for input
├── package.json               # Project metadata and dependencies
```

- **`index.js`**  
  Starts the application. It uses the other modules to collect input and perform the calculation.

- **`utils/inputPrompter.js`**  
  Uses Node.js's `readline` module to ask the user for:
  - The first number
  - The operator (e.g., `+`, `-`, `*`, `/`)
  - The second number  
  It returns these values to `index.js`.

- **`calculator/calculator.js`**  
  This is where the actual maths happens. Right now it just returns `null` — your challenge is to complete this file.

---

## ▶️ How to Run the Project

1. Open a terminal and navigate to the project folder.
2. Run the application using:

```bash
npm start
```

3. You'll be prompted to enter:
   - A number
   - An operator (e.g. `+`)
   - Another number

4. The program will calculate and display the result.

---

## 🧠 Your Challenge

Open the file `calculator/calculator.js`. You'll see this function:

```js
function calculate(num1, num2, operator) {
    return null; // You need to implement this!
}
```

You need to write code that checks which operator was provided and performs the correct calculation. For example:

- If the operator is `+`, return `num1 + num2`
- If the operator is `-`, return `num1 - num2`
- And so on...

Make sure to also handle errors like dividing by zero, or an invalid operator.

---

## 🌱 Ideas to Build On

Once your basic calculator works, here are some ways to extend it and learn more:

- **Add more operators**: Handle `%` (modulus), `**` (power), or even `sqrt` (square root).
- **Input validation**: Check if the user actually entered numbers, and prompt again if they didn’t.
- **Chained calculations**: Let the user do a series of calculations without restarting the app.
- **History**: Store and display a list of all previous results.
- **Tests**: Write unit tests for `calculate()` using a framework like [Jest](https://jestjs.io/).
- **Web version**: Convert the calculator into a simple webpage later using HTML/JS.

---

## 🚀 Keep Going

You’ve already set up:
- A multi-file Node.js project
- Modular code with `require(...)`
- A command-line prompt system

Now it’s time to learn how to control logic, handle user input, and keep building cool things with JavaScript. Great job!
