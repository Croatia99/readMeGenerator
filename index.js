var fs = require('fs')
var inquirer = require('inquirer');
var generate = require('./generateMarkdown')

 inquirer
    .prompt([
         {
             name: 'projectTitle',
             type: "input",
             message: 'Enter the project title',
             default: "projectTitle"
         },
         {
             name: 'projectDescript',
             type: "input",
             message: 'Enter the project description',
             default: "project description"
         },  
         {
            name: 'tableofContents',
            type: "input",
            message: 'Enter the project table of contents',
            default: "table of contents"
        },  
        {
            name: 'instalation',
            type: "input",
            message: 'Enter the instalation',
            default: "instalation"
        },  
        {
            name: 'usage',
            type: "input",
            message: 'Enter the usage',
            default: "usage"
        },  
        {
            name: 'license',
            type: "input",
            message: 'Enter the license',
            default: "license"
        },  
        {
            name: 'contributors',
            type: "input",
            message: 'Enter the project contributors',
            default: "contributors"
        },  
        {
            name: 'tests',
            type: "input",
            message: 'Enter the tests',
            default: "tests"
        },  
        {
            name: 'githubname',
            type: "input",
            message: 'Enter your GitHub username',
            default: "gitHub username"
        }  
    ]).then(response => {
        console.log(response)
        fs.writeFile(`${response.projectTitle}.md`, generate(response), function(err){
           
        })
    })

    function test(){
       console.log('hello world')
    }
  
    var name = 'something'







    
/* At least one badge
* Project title
* Description
* Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
  * User GitHub profile picture
  * User GitHub email

    console.log(title)*/
