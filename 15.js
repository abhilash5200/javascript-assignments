let marks=[10,20,30,40,50,60,70,80,90,100]
//filter(selection)
//get all marks less 
let result1=marks.filter(function(element){
    return element<50
})
//write a function that can extract greater than 70 packed them in an array and return it
let result2=marks.filter(function(element){
    return element>70
})
console.log(result1)
console.log(result2)

function getGreaterThan70(marks) {
    let result = [];

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] > 70) {
            result.push(marks[i]);
        }
    }

    return result;
}

// Test data
//let marks = [78, 65, 82, 55, 90, 70];

// Function call
console.log(getGreaterThan70(marks));

//find all marks between 30 and 90
let result3=marks.filter(function(element){
    return element>=30 && element<=90
})
console.log(result3)




//map(transform or modify)
let salaries=[10000,20000,30000]
//write a function to add 50 for each salary
for(let v of salaries)
    console.log(v+50)

let result4=salaries.map(function(element){
    return element+50
})
console.log(result4)
// using modify
