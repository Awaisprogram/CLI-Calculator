"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const Num = await inquirer_1.default.prompt([
    { message: "Enter 1st number:", type: "number", name: "first" },
    { message: "Enter 2nd number:", type: "number", name: "second" },
    {
        message: "Enter the operation",
        name: "operation",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (Num.operation === "Addition")
    console.log(`The answer of sum is:${Num.first + Num.second}`);
else if (Num.operation === "Subtraction")
    console.log(`The answer of subtraction is:${Num.first - Num.second}`);
else if (Num.operation === "Multiplication")
    console.log(`The answer of multiplication is:${Num.first * Num.second}`);
else
    console.log(`The answer of division is:${Num.first / Num.second}`);
