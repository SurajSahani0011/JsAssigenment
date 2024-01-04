class Polynomial {
    constructor(coefficients) {
      this.coefficients = coefficients;
    }
  
    add(otherPolynomial) {
      const resultCoefficients = [];
  
      const maxLength = Math.max(
        this.coefficients.length,
        otherPolynomial.coefficients.length
      );
  
      for (let i = 0; i < maxLength; i++) {
        const term1 = this.coefficients[i] || 0;
        const term2 = otherPolynomial.coefficients[i] || 0;
  
        resultCoefficients[i] = term1 + term2;
      }
  
      return new Polynomial(resultCoefficients);
    }
  
    toString() {
      let result = '';
      for (let i = this.coefficients.length - 1; i >= 0; i--) {
        const coefficient = this.coefficients[i];
  
        if (coefficient !== 0) {
          result += `${coefficient}x^${i} + `;
        }
      }
  
      // Remove trailing ' + '
      result = result.replace(/ \+ $/, '');
  
      return result;
    }
  }
  
  // Example usage:
  const poly1 = new Polynomial([1, 2, 3]); // represents 3x^2 + 2x + 1
  const poly2 = new Polynomial([0, 4, 5]); // represents 5x^2 + 4x
  
  const result = poly1.add(poly2);
  console.log(result.toString()); // Output: 8x^2 + 6x + 1
  