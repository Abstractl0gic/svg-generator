// lib/shapes.js
class Triangle {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
  
    // generate the SVG markup for the triangle
    generateSVG() {
      const svgMarkup = `
        <svg width="300" height="200">
          <polygon points="150,50 250,150 50,150"
            fill="${this.shapeColor}" />
          <text x="100" y="120" font-size="24"
            fill="${this.textColor}">${this.text}</text>
        </svg>
      `;
      return svgMarkup;
    }
  }
  
  class Circle {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
  
    // generate the SVG markup for the circle
    generateSVG() {
      const svgMarkup = `
        <svg width="300" height="200">
          <circle cx="150" cy="100" r="70"
            fill="${this.shapeColor}" />
          <text x="100" y="120" font-size="24"
            fill="${this.textColor}">${this.text}</text>
        </svg>
      `;
      return svgMarkup;
    }
  }
  
  class Square {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
  
    // generate the SVG markup for the square
    generateSVG() {
      const svgMarkup = `
        <svg width="300" height="200">
          <rect width="200" height="200"
            fill="${this.shapeColor}" />
          <text x="100" y="120" font-size="24"
            fill="${this.textColor}">${this.text}</text>
        </svg>
      `;
      return svgMarkup;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  