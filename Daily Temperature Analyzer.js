//Assignment 1: Daily Temperature Analyzer
//----------------------------------------
//Scenario : You are analyzing daily temperatures recorded by a weather app.

//Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

//1. filter() temperatures above 35
let result = temperatures.filter(element => element > 35)
console.log(result)

//2. map() to convert all temperatures from Celsius → Fahrenheit
let result1 = temperatures.map(element => element * 9 / 5 + 32)
console.log(result1)

//3. reduce() to calculate average temperature
let result2 = temperatures.reduce((aaumulator, element) => aaumulator + element, 0) / temperatures.length
console.log(result2)

//4. find() first temperature above 40
let result3 = temperatures.find(element => element > 40)
console.log(result3)

//5. findIndex() of temperature 28
let result4 = temperatures.findIndex(element => element === 28)
console.log(result4)
