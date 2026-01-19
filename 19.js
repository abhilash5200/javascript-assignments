//You are analyzing daily temperatures recorded by a weather app.
//test data


const temperatures = [32, 35, 28, 40, 38, 30, 42];


//filter() temperatures above 35
let result=temperatures.filter(temp=>temp>35);
console.log(result);



//map() to convert all temperatures from Celsius → Fahrenheit
let result1=temperatures.map(temp=>temp*9/5+32);
console.log(result1);


// reduce() to calculate average temperature
let result2=temperatures.reduce((sum,temp)=>sum+temp,0)/temperatures.length;
console.log(result2);


//find() first temperature above 40
let result3=temperatures.find(temp=>temp>40);
console.log(result3);


//findIndex() of temperature 28
let result4=temperatures.findIndex(temp=>temp===28);
console.log(result4);