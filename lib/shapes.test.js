const { Triangle, Circle, Square } = require('./shapes');

// Helper function to remove white spaces and line breaks from an SVG string
function normalizeSVG(svgString) {
  return svgString.replace(/\s/g, '');
}

describe('Shapes', () => {
  it('should render the Triangle SVG with the given shape color', () => {
    const triangle = new Triangle('ABC', 'blue', 'green');
    const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="150,50 250,150 50,150" fill="green"/><text x="150" y="120" font-size="24" fill="blue" text-anchor="middle">ABC</text></svg>`;
    expect(normalizeSVG(triangle.render())).toBe(normalizeSVG(expectedSVG));
  });

  it('should render the Circle SVG with the given shape color', () => {
    const circle = new Circle('DEF', 'red', 'yellow');
    const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="70" fill="yellow"/><text x="150" y="120" font-size="24" fill="red" text-anchor="middle">DEF</text></svg>`;
    expect(normalizeSVG(circle.render())).toBe(normalizeSVG(expectedSVG));
  });

  it('should render the Square SVG with the given shape color', () => {
    const square = new Square('GHI', 'purple', 'orange');
    const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="200" height="200" fill="orange"/><text x="150" y="120" font-size="24" fill="purple" text-anchor="middle">GHI</text></svg>`;
    expect(normalizeSVG(square.render())).toBe(normalizeSVG(expectedSVG));
  });
});
