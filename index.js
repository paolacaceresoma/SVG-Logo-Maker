const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Triangle, Square} = require("./shape");

class Logo{
    constructor(){
        this.textElement = " "
        this.shapeElement = " "
    }
    render (){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text font-size="50" fill="${color}>${text}</text>`
    }
    setShapeElement(shap){
        this.shapeElement = shape.render()
    }
}

// Questions to create logo
const questions = [
    {
        type:"input",
        name:"text",
        message:"Enter three characters for the logo.",
    },
    {
        type:"input",
        name:"font-color",
        message:"Enter a color keyword or a hexadecimal number.",
    },
    {
        type:"list",
        name:"logos",
        message:"Choose a shape below.",
        choices:["Circle", "Triangle", "Square"],
    },
    {
        type:"input",
        name:"shape",
        message:"Enter a color keyword or a hexadecimal number for the shape.",
    },

];


// Function to write SVG file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, (err) => {
        err ? console.log(err) : console.log("success");
       });
}

// Function to initialize app
function init() {
    var userInput = " "
    const answers = inquirer.prompt(questions);
    userInput = answers.text
    var inital = " ";
    var logo = new Logo();
    fontColor = answers["font-color"];
    logo.setTextElement(userInput,fontColor);
    logo.setShapeElement();
    inital = logo.render();
    
clientShape = answers["logos"];

let clientShapePicked;
if (clientShape === "Circle"){
    clientShapePicked = new Circle();
} else if (clientShape === "Triangle"){
    clientShapePicked = new Triangle();
} else if (clientShape === "Square"){
    clientShapePicked = new Square();
} 

clientShapeColor = answers.shape-color;
clientShapePicked.setColor(clientShapeColor);

    inquirer.prompt(questions)
    .then((response) => {
    writeToFile("logo.svg",inital)
    })
}

// Function call to initialize app
init();
