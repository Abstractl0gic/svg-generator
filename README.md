# SVG Generator

SVG Generator is a simple JavaScript tool that allows you to generate SVG shapes (Triangle, Circle, and Square) with customizable colors and labels. It's a lightweight utility that helps you create SVG graphics easily.

## Installation

You can install the SVG Generator library using npm:

```bash
npm install name-of-project
```
## Usage
```
const { Triangle, Circle, Square } = require('logo-generator');

// Create a Triangle
const triangle = new Triangle('ABC', 'blue', 'green');

// Create a Circle
const circle = new Circle('DEF', 'red', 'yellow');

// Create a Square
const square = new Square('GHI', 'purple', 'orange');

// Generate SVGs for the shapes
const triangleSVG = triangle.generateSVG();
const circleSVG = circle.generateSVG();
const squareSVG = square.generateSVG();

console.log(triangleSVG);
console.log(circleSVG);
console.log(squareSVG);
```

Replace 'logo-generator' with the actual name of your installed library from npm.

Please make sure you have Node.js installed on your system before running the above commands.

SVG Text References
This project is built on top of SVG (Scalable Vector Graphics), which is a powerful and flexible way to create graphics in XML format. If you need to understand more about SVG text elements, you can refer to W3Schools - SVG Text for detailed information.

Contributing
Contributions to the Logo Generator project are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the GitHub repository.

License
This project is licensed under the MIT License - see the LICENSE file for details.


#Sources

SVG Text: https://www.w3schools.com/graphics/svg_text.asp
