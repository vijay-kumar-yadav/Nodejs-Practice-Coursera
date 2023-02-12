const chai = require("chai");
const expect = chai.expect;

const calculator = require("../sourceCalc/sourceCalc");

describe("test calculator functionality ...", () => {
  describe("Test addition functionality ...", () => {
    it("2+2 should be equal to 4", () => {
      expect(calculator.addition(2, 2)).to.equal(4);
    });
    it("should add two numbers ", () => {
      expect(calculator.addition(23, 11)).to.equal(34);
      expect(calculator.addition(12, -11)).to.equal(1);
      expect(calculator.addition(2322, 1121)).to.equal(3443);
    });
  });
  describe("Test Division functionality ...", () => {
    it("should divide two number", () => {
      expect(calculator.division(6, 2)).to.equal(3);
      expect(calculator.division(7, 2)).to.equal(3.5);
      expect(calculator.division(8, 2)).to.equal(4);
    });
    it("should return NaN if denominator is zero", () => {
      expect(calculator.division(6, 0)).to.equal(undefined);
    });
  });
});
