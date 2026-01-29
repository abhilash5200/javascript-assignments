// Array
let skills=['react','angular','node.js','java']
//Accessing the elements(destructurig)
let [skills1,skills2,skills3,skills4] =skills
console.log(skills2)
//inserting
//at start
skills.unshift('python')
console.log(skills)
//at end
skills.push('c++')
console.log(skills)
//in between
//slice(index,delete count,elements)
skills.splice(2,0,'sql')
console.log(skills)
//delete
   //at start
   skills.shift()
   console.log(skills)
   //at end
   skills.pop()
   console.log(skills)
   //in between(index,elements)
   skills.splice(2,1)
   console.log(skills)

