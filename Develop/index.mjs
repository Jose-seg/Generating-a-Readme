// TODO: Include packages needed for this application
import fs from 'fs/promises';
import inquirer from 'inquirer';
import MarkdownIt from 'markdown-it';
import chalk from 'chalk';

import { renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown } from './utils/generateMarkdown.mjs';

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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(chalk.red('Error writing file:', err));
        } else {
            console.log(chalk.green('Successfully wrote the README file:', fileName));
        }
    })
}

function generateReadmeData(answers) {
    const licenseBadge = renderLicenseBadge(answers.license);
    return `
 ${licenseBadge}

# ${answers.title}
    
${answers.description}
    
## Table of contents
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
    
${answers.installation}
    
## Usage
    
${answers.usage}
    
 ## License
    
 This project is licensed under the ${answers.license} license.
    
## Contributing
    
${answers.contributing}
    
## Tests
    
${answers.tests}
    
## Questions
    
For any questions, feel free to contact me:
    
- [Github](${answers.githubUsername})
- [Email](${answers.email})
  `;
}

// TODO: Create a function to initialize app
function init() {
    inquirer
   .prompt(questions)
   .then((answers) => {
// Generate the README content using the user's input
const readmeData = generateReadmeData(answers);

// Write the README content to a file
writeToFile('README.md', readmeData);
// Uses the 'answers' object in order to access the user's input
    console.log(answers);
   })
   .catch((error) => {
    console.error('Seems that an error occurred:', error)
   });
}

// Function call to initialize app
init();
