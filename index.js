var inquirer = require('inquirer');
var fs = require('fs');


console.log('Hi, welcome to Pro README Gen.');

const questionsToAnswer = [
//   {
//     type: 'confirm',
//     name: 'toBeDelivered',
//     message: 'Is this for delivery?',
//     default: false,
//   },
{
    type: 'input',
    name: 'title',
    message: "Insert project name!"
},
{
    type: 'input',
    name: 'description',
    message: "Description of project?"
},
{
    type: 'input',
    name: 'github',
    message: "What is your github username?"
},
{
    type: 'input',
    name: 'email',
    message: "What is your email?"
},
{
    type: 'list',
    name: 'license',
    message: "Which license for project?",
    choices: ["MIT", "Private"],
},
];

inquirer.prompt(questionsToAnswer).then((theJuice) => {
 const { title, description, license, github, email} = theJuice;

 const readmeGen = `
 # ${title}

 ## Table of Contents 
 
 - [Description](#description)
 - [Email](#email)
 - [Github](#github)
 - [License](#license)

## Description

${description}


## Github

[${github}](https://github.com${github})

## Email

${email}

## License

${license}
---
 `;

    fs.appendFile("README.md", readmeGen, (error) =>
        console.log(error ? "Error in the file" : "success")
    );
});