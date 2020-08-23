const fs = require('fs');
const inquirer = require("inquirer");
const util = require("util");
const generateReadme = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// Function to prompt user with questions to create ReadMe
function userQuestions() {
    return inquirer.prompt(questions)
}

// Array of questions for user
const questions = [
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
            message: "What are the instructions for usage?",
            name: "usage"
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
        },
        {
            type: "list",
            message: "Select a license for your project.  It is recommended that you save a seperate LICENSE file in the root of the repository.",
            name: "license",
            choices: [
                "MIT",
                "Apache",
                "GNUGPLv3",
                "Unlicense"
            ],
        },
    ]

// Calls function to write ReadMe file
userQuestions().then((answers) => {
    const text = generateReadme(answers);

    return writeFileAsync("README-demo.md", text);
  })
  .then(() => {
    console.log("README-demo.md successfully created!");
  })
  .catch((err) => {
    console.log(err);
  });