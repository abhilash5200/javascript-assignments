//make Api req
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json()) //parse the JSON from the response
.then(data => console.log(data)) //log the data to the console
.catch(error => console.error('Error fetching data:', error)); //handle any errors

//modern syntax to consume promise
async function fetchData(){
    //make Api req and get response
    let response=await fetch('https://jsonplaceholder.typicode.com/posts/1');
    //extrct data from response
    let data=await response.json();
    console.log(data);
}
fetchData();

//API enables communication between different software systems
//JSON (javascript object notation) lightweight data interchange format
//all the keys should be in double quotes
//JSON
let student={
    rollno:100,
    name:'anuar',
    age:21
};

//JS OBJ TO JSON
let studentJSON=JSON.stringify(student);
console.log(typeof studentJSON);


//JSON TO JS OBJ
let studentObj=JSON.parse(studentJSON);
console.log(typeof studentObj);

console.log(studentObj);

//npm stands for node package manager