# ATP Week-3 JavaScript Assignments

## Overview

This repository contains JavaScript assignments and practice programs focused on modern JavaScript concepts including:

- Classes and Objects
- Object-Oriented Programming (OOP)
- Promises
- Async/Await
- Fetch API
- Date Handling
- ES6 Modules
- Error Handling
- Shallow Copy vs Deep Copy

The exercises are designed to provide hands-on experience with real-world JavaScript programming concepts.

---

## Topics Covered

### Object-Oriented Programming
- Classes
- Objects
- Constructors
- Methods
- Static Properties
- Private Fields

### Asynchronous JavaScript
- setTimeout()
- Event Loop
- Promises
- Promise Consumption
- Async/Await

### API Integration
- Fetch API
- JSON Parsing
- JSON.stringify()
- JSON.parse()

### Date and Time
- Creating Date Objects
- Date Extraction
- Date Comparison
- Date Validation
- Age Calculation

### Modules
- Default Export
- Named Export
- Import Statements

### Error Handling
- Optional Chaining
- Nullish Coalescing Operator
- Understanding Runtime Errors

### Object Copying
- Shallow Copy
- Deep Copy
- Spread Operator
- structuredClone()

---

## Assignments

### Assignment 1: Date Creation & Extraction

Learn date and time operations by:

- Creating Date objects
- Extracting year, month, date, and time
- Formatting dates
- Comparing dates
- Validating dates
- Calculating age

**File:**
- datacreationandextractionassignment-1.js

---

### Assignment 2: Library Book Management System

Build a library management system using classes.

Features:

- Create Book objects
- Borrow books
- Return books
- Check availability
- Identify long books
- Display book information

**File:**
- class-assignment.js

---

### Assignment 3: Shallow Copy vs Deep Copy

Understand object copying concepts.

Features:

- Create shallow copies using spread operator
- Create deep copies using structuredClone()
- Compare mutation behavior
- Analyze nested object updates

**File:**
- shallowcopyassignment.js

---

## Practice Programs

### Classes and Objects

Learn:

- Class creation
- Constructors
- Static properties
- Private fields
- Object instantiation

**File:**
- class.js

---

### Asynchronous JavaScript

Learn:

- Event Loop
- Non-blocking execution
- setTimeout()
- Promise creation
- Promise consumption

**File:**
- asynchronus.js

---

### Promises

Practice:

- Creating promises
- Handling resolve()
- Handling reject()
- Using then()
- Using catch()

**File:**
- promise.js

---

### Fetch API and JSON

Learn:

- API requests
- Fetch API
- JSON conversion
- Async/Await syntax

**File:**
- api.js

---

### Date Handling

Practice:

- Date creation
- Date comparison
- Difference between dates
- Date methods

**File:**
- date.js

---

### Error Handling

Learn:

- Optional chaining
- Nullish coalescing
- Runtime error prevention

**File:**
- error.js

---

### ES6 Modules

Learn:

- Default exports
- Named exports
- Import statements

**Files:**
- module1.js
- module2.js

---

## Project Structure

```text
ATP WEEK-3/
│
├── api.js
├── asynchronus.js
├── class.js
├── class-assignment.js
├── datacreationandextractionassignment-1.js
├── date.js
├── error.js
├── module1.js
├── module2.js
├── promise.js
├── shallowcopyassignment.js
└── README.md
```

---

## Prerequisites

- Node.js v18+
- Visual Studio Code

---

## Running the Programs

### Run a JavaScript File

```bash
node filename.js
```

Example:

```bash
node promise.js
```

### Run ES6 Modules

```bash
node module2.js
```

If required, add the following to package.json:

```json
{
  "type": "module"
}
```

---

## Concepts Demonstrated

### Promise Example

```javascript
let promiseObj = new Promise((resolve, reject) => {
  resolve("Success");
});

promiseObj
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

### Async/Await Example

```javascript
async function fetchData() {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}
```

### Class Example

```javascript
class Person {
  constructor(id, age) {
    this.id = id;
    this.age = age;
  }
}
```

### Deep Copy Example

```javascript
let copiedObject = structuredClone(originalObject);
```

---

## Learning Outcomes

After completing this repository, you will be able to:

- Create reusable classes
- Implement object-oriented programming concepts
- Work with asynchronous JavaScript
- Consume APIs using Fetch
- Handle promises using async/await
- Manage dates and time calculations
- Use ES6 modules
- Handle runtime errors safely
- Understand shallow and deep copying

---

## Technologies Used

- JavaScript (ES6+)
- Node.js
- Fetch API

---
