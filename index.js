var fs = require('fs');
var inquirer = require('inquirer');

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
    name: 'gitHub',
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

inquirer.prompt(questions).then(function (response) {
  console.log(response);

  var content = file(response);
  console.log(content);
  fs.writeFile('./ReadMe.md', content, function (err) {
    if (err) throw err;
    console.log('success');
  });
});

function file(response) {
  var content = `# ${response.title}
      ##### ${response.userName}](${response.gitHub}) [Email Me]${response.email}
      #### ReadMeGenerator 2022 ${response.license} (free to use).
      -----------------------------------------------------------------------------------------
      ## Table of Contents

      * [Repository Description]
      ${response.description}

      *[Participation]
      ${response.contribute}
      
      ## User Story
      
      ## User Story
      AS A developer
      I WANT a README generator
      SO THAT I can quickly create a professional README for a new project.
      
      ## License
      ${response.license}

      UCLA EXTENSION CODING BOOTCAMP Stephen Pak Challenge #9 2022`;

  return content;
}
