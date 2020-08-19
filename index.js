const fs = require('fs');
const inquirer = require("inquirer");


async function promptUser() {
    try {
        const questions = await inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "projectTitle" 
        },
        {
            type: "input",
            message: "Please describe your project.", 
            name: "description"
        }
    ])

    const markdownTemplate = `# ${projectTitle}

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
    ${description}
    
    ### Deployed Web App
    [Deployed application](https://github.com/ambertrand)
    
    ## Installation Instructions
    To install necessary dependencies, run the following command:
    
    
    ## Usage
    ${usage}
    
    
    ## Tests
    To run tests, run the following command
    
    
    ## Questions
    If you have any questions about the repo, open an issue or contact me directly.  You can find my contact info below.
    
    
    ### ${developer}
        * [${email}](${email})
        * [https://github.com/${githubUsername}](https://github.com/${githubUsername})
    
    ## Contributing
    ${contributors}
    
    ## License
    This project is licensed under the ${license} License`

        console.log(questions)
    }catch (err) {
        console.log(err);
    }
}






// function call to initialize program
promptUser();








// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

