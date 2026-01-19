// Assignment 2: Online Course Name Processor
// Scenario: Preparing a course list for website display

// Test data
const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter() courses with name length > 5
const filteredCourses = courses.filter(course => course.length > 5);
console.log("Filtered Courses (length > 5):", filteredCourses);

// 2. map() to convert course names to uppercase
const upperCaseCourses = courses.map(course => course.toUpperCase());
console.log("Uppercase Courses:", upperCaseCourses);

// 3. reduce() to generate a single string
// "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
const courseString = upperCaseCourses.reduce(
  (acc, course) => acc + " | " + course
);
console.log("Course String:", courseString);

// 4. find() the course "react"
const foundCourse = courses.find(course => course === "react");
console.log("Found Course:", foundCourse);

// 5. findIndex() of "node"
const nodeIndex = courses.findIndex(course => course === "node");
console.log("Index of 'node':", nodeIndex);
