# Error Handling

## Types of error handling:

Operational Errors and Logical Errors.

1. Logical Error difficult to detect

## Exception Handling Statements

1. throw
2. try-catch-finally

```javascript
try {
  //Block of code that is likely to throw error
} catch (error) {
  //Block of code to handle the errors.
} finally {
  //Block of code to be executed regardless of try and catch block
}

const divide = (num1, num2) => {
  try {
    if (num2 === 0) {
      throw new Error("The Denominator is zero");
    }
    return num1 / num2;
  } catch (err) {
    console.log(err);
  }
};
console.log(divide(10, 0));
```

## Constructor of the Error Class

1. new Error()
2. new Error(message)
3. new Error(message, options)
4. new Error(message, fileName)
5. new Error(message, fileName, lineNumber)
