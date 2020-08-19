const fs = require('fs');
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// Function to prompt user with questions to create ReadMe
function userQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "projectTitle"
        },
        {
            type: "input",
            message: "Please describe your project.",
            name: "description"
        },
        {
            type: "input",
            message: "What is the link to your project?",
            name: "projectLink"
        },
        {
            type: "input",
            message: "What are the instructions for installation?",
            name: "installation"
        },
        {
            type: "input",
            message: "How do you test this application?",
            name: "test"
        },
        {
            type: "input",
            message: "What is the developers name?",
            name: "developer"
        },
        {
            type: "input",
            message: "What is the developers email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the developers GitHub username?",
            name: "githubUsername"
        },
        {
            type: "input",
            message: "Who else contributed to this project?",
            name: "contributors"
        }
        // {
        //     type: "list",
        //     message: "What license would you like to use for your project?",
        //     name: "license"
        //     choices: [

        //     ]
        // },
    ])
}


// Generate Readme function
function generateReadme(answers) {
    return `# ${answers.projectTitle}

    ## Table of Contents
        * [About this Project](#about-the-project)
            * [Deployed Web App](#depolyed-web-app)
        * [Installation Instructions](#installation-instructions)
        * [Usage](#usage)
        * [Tests](#tests)
        * Questions
        * [Contributing](#contributing)
        * License


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
    This project is licensed under the ${answers.license} License`

}






userQuestions().then(function(answers) {
    const text = generateReadme(answers);

    return writeFileAsync("ReadMe.md", text);
  })
  .then(function() {
    console.log("Successfully wrote to Readme");
  })
  .catch(function(err) {
    console.log(err);
  });

// function call to initialize program
// userQuestions();

// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }