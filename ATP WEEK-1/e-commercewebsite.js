//ASSIGNMENT 1:
//-------------
//You are building a shopping cart summary for an e-commerce website.

//Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//1. Use filter() to get only inStock products
let result = cart.filter(element => element.inStock)
console.log(result)

//2. Use map() to create a new array with: { name, totalPrice }
let result1 = cart.map(element => {
  return { name: element.name, totalPrice: element.price * element.quantity }
})
console.log(result1)

//3. Use reduce() to calculate grand total cart value
let result2 = cart
  .map(element => element.price * element.quantity)
  .reduce((aaumulator, element) => aaumulator + element, 0)
console.log(result2)

//4. Use find() to get details of "Mouse"
let result3 = cart.find(element => element.name === "Mouse")
console.log(result3)

//5. Use findIndex() to find the position of "Keyboard"
let result4 = cart.findIndex(element => element.name === "Keyboard")
console.log(result4)



