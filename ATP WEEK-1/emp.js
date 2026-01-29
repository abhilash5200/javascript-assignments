let emp={
    eno:1,
    name:"abhi"
}
//accessing props
console.log(emp.eno)
console.log(emp.name)
//adding new property(dynamic)
emp.city='hyderabad'
//update a property

emp.eno=123;
//delete a prop 
delete emp.name;
//freeze an object 
Object.freeze(emp)
console.log(emp)
//read keys
console.log(Object.keys(emp))
//read values
console.log(Object.values(emp))
//