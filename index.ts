#! /usr/bin/env node

import inquirer from "inquirer";

const questions = [
    {
        name: "weight",
        message: "weight(kg):",
        type: "number",
    },
    {
        name: "height",
        message: "height(m):",
        type: "number",
    }
];

const calculatorBMI = (weight: number, height: number): number => weight / (height * height);

const main = async () => {
    const { weight, height } = await inquirer.prompt(questions);

    console.log(`BMI: ${calculatorBMI(weight, height).toFixed(2)}`);
};

main();
