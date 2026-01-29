//Assignment 3: Student Marks List
//--------------------------------
//Scenario : You receive marks from an exam system.

//Test data:
const marks = [78, 92, 35, 88, 40, 67];

//1. filter() marks ≥ 40 (pass marks)
let result = marks.filter(element => element >= 40)
console.log(result)

//2. map() to add 5 grace marks to each student
let result1 = marks.map(element => element + 5)
console.log(result1)

//3. reduce() to find highest mark
let result2 = marks.reduce((aaumulator, element) =>
  aaumulator > element ? aaumulator : element
)
console.log(result2)

//4. find() first mark below 40
let result3 = marks.find(element => element < 40)
console.log(result3)

//5. findIndex() of mark 92
let result4 = marks.findIndex(element => element === 92)
console.log(result4)
