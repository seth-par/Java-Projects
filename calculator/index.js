const { askForInputs } = require('./utils/inputPrompter');
const { calculate } = require('./calculator/calculator');

async function main() {
    const { num1, num2, operator } = await askForInputs();
    const result = calculate(num1, num2, operator);
    console.log(`Result: ${result}`);
    process.exit(0);
}

main();
