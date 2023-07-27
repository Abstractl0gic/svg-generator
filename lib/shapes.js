class Shape {
  constructor(label, textColor) {
    this.label = label;
    this.textColor = textColor;
  }
}

class Triangle extends Shape {
  constructor(label, textColor, fillColor) {
    super(label, textColor);
    this.fillColor = fillColor;
  }

  generateSVG() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
              <polygon points="150,50 250,150 50,150" fill="${this.fillColor}" />
              <text x="150" y="120" font-size="24" fill="${this.textColor}" text-anchor="middle">${this.label}</text>
            </svg>`;
  }
}

class Circle extends Shape {
  constructor(label, textColor, fillColor) {
    super(label, textColor);
    this.fillColor = fillColor;
  }

  generateSVG() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
              <circle cx="150" cy="100" r="70" fill="${this.fillColor}" />
              <text x="150" y="120" font-size="24" fill="${this.textColor}" text-anchor="middle">${this.label}</text>
            </svg>`;
  }
}

class Square extends Shape {
  constructor(label, textColor, fillColor) {
    super(label, textColor);
    this.fillColor = fillColor;
  }

  generateSVG() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
              <rect width="200" height="200" fill="${this.fillColor}" />
              <text x="150" y="120" font-size="24" fill="${this.textColor}" text-anchor="middle">${this.label}</text>
            </svg>`;
  }
}

module.exports = { Triangle, Circle, Square };

