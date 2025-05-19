function parseInput(args) {
    // Example: node index.js 5 + 3
    // args = ['5', '+', '3']

    // You could add validation and conversion here
    return {
        num1: Number(args[0]),
        operator: args[1],
        num2: Number(args[2])
    };
}

module.exports = { parseInput };
