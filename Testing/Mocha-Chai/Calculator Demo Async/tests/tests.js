const chai = require("chai");
const expect = chai.expect;

const asyncalc = require("../asyncsource/asyncsource");

describe("Asynchronous Testing using mocha and chai", () => {
  it("Should add two numbers", (done) => {
    var result = asyncalc.asyncadd(3, 2, (addres) => {
      expect(addres).to.equal(5).to.be.a("number");
      done();
    });
  });
  it("Should sub two numbers", (done) => {
    var result = asyncalc.asyncsub(3, 2, (subres) => {
      expect(subres).to.equal(1).to.be.a("number");
      done();
    });
  });
});
