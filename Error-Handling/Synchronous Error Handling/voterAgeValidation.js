const AgeError = require("./ageException");

function ageValidator(age) {
  try {
    if (age < 0) {
      throw new AgeError("Age cannot be negative");
    }
    if (age >= 0 && age < 18) {
      throw new AgeError("Age is invalid for voting");
    }
    console.log(`Age ${age} yrs is valid`);
  } catch (err) {
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
    console.log("\n");
  } finally {
    console.log("Age is validated");
  }
}
ageValidator(11);
