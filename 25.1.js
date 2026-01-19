//ASSIGNMENT 2:
//-------------
//Student Performance Dashboard
//You are working on a college result analysis system.

//Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//1. filter() students who passed (marks ≥ 40)
let result = students.filter(element => element.marks >= 40)
console.log(result)

//2. map() to add a grade field
let result1 = students.map(element => {
  if (element.marks >= 90)
    element.grade = "A"
  else if (element.marks >= 75)
    element.grade = "B"
  else if (element.marks >= 60)
    element.grade = "C"
  else
    element.grade = "D"
  return element
})
console.log(result1)

//3. reduce() to calculate average marks
let result2 = students
  .map(element => element.marks)
  .reduce((aaumulator, element) => aaumulator + element, 0) / students.length
console.log(result2)

//4. find() the student who scored 92
let result3 = students.find(element => element.marks === 92)
console.log(result3)

//5. findIndex() of student "Kiran"
let result4 = students.findIndex(element => element.name === "Kiran")
console.log(result4)
