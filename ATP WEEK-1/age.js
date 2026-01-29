//students
let students=[{sno:1,name:'abhi',age:20},
    {sno:2,name:'ravi',age:21},
    {sno:3,name:'rohit',age:22},
    {sno:4,name:'bharath',age:23},

    
];
//find students age less than 20
let result=students.filter(studentObj=>studentObj.age<20)
console.log(result)
//increment age by 2 years for rohit
let result1=students.map(studentObj=>{
    if(studentObj.name==='rohit')
        studentObj.age+=2
    return studentObj
})
console.log(result1)

//find the sum ages of students
let result2=students.map(studentObj=>studentObj.age).reduce((aaumulator,element)=>aaumulator+element,0)
console.log(result2)