#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
    return new Promise((res) =>{
        setTimeout( res, 2000)      
    })
}

async function welcome() {
    let title = chalkAnimation.rainbow("Let's start calculation")
    await sleep();
    title.stop();
    console.log(chalk.blue(`
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `))

    console.log(chalk.magentaBright(`
   ╔╦╗╔═╗╦  ╦╔═╗╦  ╔═╗╔═╗╔═╗╔╦╗  ╔╗ ╦ ╦  ╔═╗╔═╗╦╔═╗
    ║║║╣ ╚╗╔╝║╣ ║  ║ ║╠═╝║╣  ║║  ╠╩╗╚╦╝  ╠═╣╚═╗║╠═╣
   ═╩╝╚═╝ ╚╝ ╚═╝╩═╝╚═╝╩  ╚═╝═╩╝  ╚═╝ ╩   ╩ ╩╚═╝╩╩ ╩                                                                                   
    `));
}
await welcome();    
async function  askQuestion() {
    const answers = await inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"list",
        name:"operator",
        message:chalk.hex('#AED6F1')("Which operation you want to perform? \n"),
        choices:["+ Addition", "- Subtraction", "* Multiplication", "/ Division", "^ Power"]
    },
    {
        type:"number",
        name:"num1",
        message:chalk.hex('E8A828')("Enter value of number 1: ")
    },
    {
        type:"number",
        name:"num2",
        message:chalk.hex('#FFBF00')("Enter value of number 2: ")
    }
  ]);
    if(answers.operator == "+ Addition"){
        console.log(chalk.greenBright(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if(answers.operator == "- Subtraction"){
        console.log(chalk.greenBright(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if(answers.operator == "* Multiplication"){
        console.log(chalk.greenBright(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if(answers.operator == "/ Division"){
        console.log(chalk.greenBright(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
    else if(answers.operator == "^ Power"){
        console.log(chalk.greenBright(`${answers.num1} ** ${answers.num2} = ${answers.num1 ** answers.num2}`));
    }   
};


async function startAgain() {
    do{
        await askQuestion();
        var again = await inquirer
        .prompt({
            type:"input",
            name:"restart",
            message:chalk.hex('#AED6F1')("Do you want to continue? Press y or n: ")
        })
    }while(again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES' || again.restart == 'Yes')
    
}
startAgain();