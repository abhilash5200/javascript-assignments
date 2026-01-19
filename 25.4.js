//ASSIGNMENT 5:
//-------------
//Bank Transaction Analyzer
//You are building a bank statement summary.

//Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//1. filter() all credit transactions
let result = transactions.filter(element => element.type === "credit")
console.log(result)

//2. map() to extract only transaction amounts
let result1 = transactions.map(element => element.amount)
console.log(result1)

//3. reduce() to calculate final account balance
let result2 = transactions.reduce((aaumulator, element) => {
  return element.type === "credit"
    ? aaumulator + element.amount
    : aaumulator - element.amount
}, 0)
console.log(result2)

//4. find() the first debit transaction
let result3 = transactions.find(element => element.type === "debit")
console.log(result3)

//5. findIndex() of transaction with amount 10000
let result4 = transactions.findIndex(element => element.amount === 10000)
console.log(result4)
