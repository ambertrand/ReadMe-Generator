// Generate Readme function
function generateReadme(answers) {
  return `# ${answers.projectTitle}

![${answers.license}](https://img.shields.io/badge/license-${answers.license}-blue)

## Table of Contents
* [About this Project](#about-the-project)
  *  [Deployed Web App](#depolyed-web-app)
* [Installation Instructions](#installation-instructions)
* [Usage](#usage)
* [Tests](#tests)
* [Questions](#questions)
* [Contributing](#contributing)
* [License](#license)


## About this Project
${answers.description}

### Deployed Web App
[${answers.projectTitle}](${answers.projectLink})

## Installation Instructions
${answers.installation}


## Usage
${answers.usage}


## Tests
${answers.test}


## Questions
If you have any questions about the repo, open an issue or contact me directly.  You can find my contact info below.


### ${answers.developer}
* [${answers.email}](${answers.email})
* [https://github.com/${answers.githubUsername}](https://github.com/${answers.githubUsername})

## Contributing
${answers.contributors}

## License
This project is licensed under the ${answers.license} License

`;
}

module.exports = generateReadme;