// index.js
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const fs = require('fs');
const path = require('path');

async function generateLogo() {
  const shapeChoices = ['Triangle', 'Circle', 'Square'];

  // prompt the user for text, text color, shape, and shape color
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => {
        if (input.length <= 3) {
          return true;
        }
        return 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or a hexadecimal number for text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: shapeChoices,
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or a hexadecimal number for shape color:',
    },
  ]);

  const { text, textColor, shape, shapeColor } = answers;

  let svgMarkup;

  // this generates the SVG markup based on the selected shape from the user
  switch (shape) {
    case 'Triangle':
      const triangle = new Triangle(text, textColor, shapeColor);
      svgMarkup = triangle.generateSVG();
      break;
    case 'Circle':
      const circle = new Circle(text, textColor, shapeColor);
      svgMarkup = circle.generateSVG();
      break;
    case 'Square':
      const square = new Square(text, textColor, shapeColor);
      svgMarkup = square.generateSVG();
      break;
    default:
      console.log('Invalid shape choice.');
      return;
  }

  // Create the 'examples' folder if it doesn't exist
  const examplesFolderPath = path.join(__dirname, 'examples');
  if (!fs.existsSync(examplesFolderPath)) {
    fs.mkdirSync(examplesFolderPath);
  }

  // Specify the path for the 'logo.svg' file inside the 'examples' folder
  const logoFilePath = path.join(examplesFolderPath, 'logo.svg');

  // write the SVG markup to 'examples/logo.svg' file
  fs.writeFile(logoFilePath, svgMarkup, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
}

generateLogo();
