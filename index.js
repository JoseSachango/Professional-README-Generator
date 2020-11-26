let inquirer = require("inquirer")
let fs = require('fs')


console.log(inquirer)
console.log("lkaklsjdflsj")


inquirer.prompt([

    {
        name: "title",
        message: "What is the name of your project",
        type: "input"

    },

    {
        name: "description",
        message: `What was your motivation? Why did you build this project? What problem does it solve? What did you learn? What makes your project stand out? If your project has a lot of features, consider adding a heading called "Features" and listing them here`,
        type: "input"
        
    },
    {
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        type: "input"
    },
    {
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        type: "input"
    },
    {
        name: "credits",
        message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
        type: "input"
    },
    {
        name: "license",
        message: "lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)",
        type: "input"
    },
    {
        name: "contributing",
        message: `If you created an application or package and would like other developers to contribute to it. add guidelines for how to do so.`,
        type: "input"
        
    },
    {
        name: "test",
        message: `write tests for your application. Then provide examples on how to run them.`,
        type: "input"
        
    },


]).then((response)=>{

    console.log(response)

    let renderMd = 
    ` # ${response.title}  
         
## Description
    ${response.description}

## Installation
    ${response.installation}

## Usage
    ${response.usage}

## Credits
    ${response.credits}

## License
    ${response.license}

## Contributing
    ${response.contributing}

## Tests
    ${response.test}
    `
    
    

  
    
    

   
    
    

    fs.writeFile("README.md",renderMd,(err)=>console.log(err))

})