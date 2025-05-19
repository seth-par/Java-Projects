const readline = require('readline');

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(query, answer => {
            rl.close();
            resolve(answer);
        });
    });
}

async function askForInputs() {
    const num1 = await askQuestion('Enter the first number: ');
    const operator = await askQuestion('Enter an operator (+, -, *, /): ');
    const num2 = await askQuestion('Enter the second number: ');

    return {
        num1: Number(num1),
        operator: operator.trim(),
        num2: Number(num2)
    };
}

module.exports = { askForInputs };
