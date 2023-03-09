function renderLicenseBadge(license) {
  if (license == 'Apache 2.0 License'){
     return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license == 'Mozilla Public License 2.0'){
       return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license == 'The MIT License'){
       return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else {
       return '';
  }
 }

function generateMarkdown(data) {
  const avatar = `https://github.com/${data.username}.png?size=50`;
  const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;
  const licenseBadge =  renderLicenseBadge(data.license);
  return `
  # ${data.title} 

  ${licenseBadge}
  
  ## Description
    ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Details](#details)

  ## Installation
  Packages required to run this program are: ${data.installation}
  
  ## Usage
  Examples of how to use this program: ${data.usage}

  ## License
  ${data.license}

  ## Tests
  To test, run the following command: ${data.tests}

  ## Contributors
  ${data.contributer}

  ## Contact
  \n![Badge](${gitHub}) 
  \n![Profile Image](${avatar})
  \nView the project in GitHub at: ${data.url}
  \nIf you have any questions, contact the author directly at ${data.email}.`
   
}

module.exports = generateMarkdown;