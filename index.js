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
        type: 'list',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
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

    //logic for license section
    console.log("this is the license I chose")
    console.log(response.license)
    let badge = ""

    /*
    switch(String(response.license)){

        case "MIT": 
            badge = "![APM](https://img.shields.io/apm/l/pack)";
        case "APACHE 2.0":
            badge = "sdfsd" ;
        case "GPL 3.0":
            badge = "sdfsdds";
        case "BSD 3":
            badge = "sdfsaa";
        case "None":
            badge = "salad";
        
    }
    */

    if(response.license==="MIT"){
        badge = "![APM](https://img.shields.io/apm/l/pack)";
    }
    else if(response.license==="APACHE 2.0"){
        badge = "sdfsd" ;
    }
    else if(response.license==="GPL 3.0"){
        badge = "asdfasdm";
    }
    else if(response.license==="BSD 3"){
        badge = "mmmmm";
    }
    else if(response.license==="None"){
        badge = "Not working";
    }

    let renderMd = 
    ` # ${response.title}  
         ${badge}
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