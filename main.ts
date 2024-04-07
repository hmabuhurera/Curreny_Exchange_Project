#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import Choice from "inquirer/lib/objects/choice.js";

console.log(chalk.magenta.bold.bgWhiteBright("\n \tWelcome to TAHA_Coding\n"))

const currency: any = {
    USD: 1,//Based_Ammont
    EUR: 0.82,
    GBP: 0.74,
    JPY: 104.25,
    CAD: 1.27,
    AUD: 1.34,
    CHF: 0.89,
    CNY: 6.47,
    INR: 74.32,
    BRL: 5.46,
    RUB: 73.94,
    ZAR: 14.46,
    MXN: 19.91,
    SGD: 1.35,
    NZD: 1.44,
    KRW: 1115.40,
    PKR: 277.75,
};

let currencyExcange = await inquirer.prompt (
    [
        {
            name: "changeFrom",
            message: chalk.green("\n \t   Enter From Currency\n"),
            type: "list",
            choices: ["USD","EUR","GBP","JPY","CAD","AUD","CHF","CNY","INR","BRL","RUB","ZAR","MXN","SGD","NZD","KRW","PKR"]
        },
        {
            name: "changeTo",
            message: chalk.green("\n \t   Enter From Currency\n"),
            type: "list",
            choices:["USD","EUR","GBP","JPY","CAD","AUD","CHF","CNY","INR","BRL","RUB","ZAR","MXN","SGD","NZD","KRW","PKR\n"]
        },
        {
            name: "Amount",
            message:chalk.green("\n \t   Enter Your Amount\n"),
            type: "number",
        }
    ]
);
let change_From = currency[currencyExcange.changeFrom]
let change_To = currency[currencyExcange.changeTo]
let $amount = currencyExcange.Amount
let baseAmount = $amount / change_From
let convertedAmount = baseAmount * change_To
console.log(chalk.red.bold(`Your Converted Amount is: ${convertedAmount.toFixed(2)}`));

