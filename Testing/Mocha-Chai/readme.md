# Mocha and Chai

1. Chai is an assertion library
   a. Assert

```javascript
var assert = chai.assert;
```

    b. Expect

```javascript
var assert = chai.expect;
```

    c. Should

```javascript
var assert = chai.should;
```

2. Mocha is a JavaScript test framework running on Node.js

## Hooks by Mocha

### before(name, fn)

name: Optional string for description
fn: Function to run once before the first test case

### after(name, fn)

name: Optional string for description
fn: Function to run once after the last test case

### beforeEach(name, fn)

name: Optional string for description
fn: Function to run before each test case

### afterEach(name, fn)

name: Optional string for description
fn: Function to run after each test case
