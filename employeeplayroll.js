//ASSIGNMENT 3:
//-------------
//Employee Payroll Processor
//You are building a salary processing module in a company HR app.

//Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//1. filter() employees from IT department
let result = employees.filter(element => element.department === "IT")
console.log(result)

//2. map() to add netSalary = salary + 10% bonus
let result1 = employees.map(element => {
  element.netSalary = element.salary + element.salary * 0.1
  return element
})
console.log(result1)

//3. reduce() to calculate total salary payout
let result2 = employees
  .map(element => element.salary)
  .reduce((aaumulator, element) => aaumulator + element, 0)
console.log(result2)

//4. find() employee with salary 30000
let result3 = employees.find(element => element.salary === 30000)
console.log(result3)

//5. findIndex() of employee "Neha"
let result4 = employees.findIndex(element => element.name === "Neha")
console.log(result4)
