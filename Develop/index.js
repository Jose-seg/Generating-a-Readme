// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const MarkdownIt = require('markdown-it');
const chalk = require('chalk');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installations instructions for your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do users utilize your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the guidelines for contributing to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the testing instructions for your project?',
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your Github username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

inquirer
   .prompt(questions)
   .then((answers) => {
// Uses the 'answers' object in order to access the user's input
    console.log(answers);
   })
   .catch((error) => {
    console.error('Seems that an error occurred:', error)
   });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
