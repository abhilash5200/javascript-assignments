let student={
    rollno:100,
    name:'anuar',
    age:21
}
console.log(student.rollno)
console.log(student.name)
console.log(student.age)
console.log(student.adress)//undefined
console.log(student.address?.length)//error
console.log(student.address?.length??'not found')//error

//catching the error object and displaying the message
//every error object has a message property and name property,stack property
//finally block will execute always even if there is no error
