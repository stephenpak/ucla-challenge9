// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your repository?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is your Github user name?',
    name: 'userName',
  },
  {
    type: 'input',
    message: 'Please enter your Github profile link?',
    name: 'Github',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select the license that you would like to use?',
    choices: ['APACHE 2.0', 'BSD 3', 'GVL-GPL 3.0', 'MIT', 'None'],
  },
  {
    type: 'input',
    message: 'Please describe the repository.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please state if others can contribute?',
    name: 'contribute',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
