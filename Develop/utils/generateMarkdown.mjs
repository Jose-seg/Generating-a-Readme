// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache 2.0':
      return '![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL 3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD 3-Clause':
      return '![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    default:
      return '';
  }
}

export {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD 3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'none') {
    return '';
  }
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license)

  return `
## License
  
This project is licensed under the ${license} license.
  
${badge}
  
Please visit the following link for more information:
  
[${license}](${link})
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
${renderLicenseBadge(data.license)}
  
## Description
  
${data.description}
  
## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation

${data.installation}
  
## Usage
  
${data.usage}
  
${licenseSection}
  
## Contributing
  
${data.contributing}
  
## Tests
  
${data.tests}
  
## Questions
  
For any questions, please reach out to the owner of the project:

- [${data.githubUsername}](https://github.com/${data.githubUsername})
- ${data.email}
  `;
}

// module.exports = generateMarkdown;
