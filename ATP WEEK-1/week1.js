console.log("Happy new year");
let a =100
let username='abhi'
let status=true
let marks=[10,20,30]
let student={sno:1,name:'abhilash'}
console.log(a,typeof a);
console.log(username,typeof username);
console.log(status,typeof status);
console.log(marks,typeof marks);
console.log(student,typeof student);
function threenumbers(a,b,c){
    if(a>b && a>c)
        console.log(a);
    else if(b>a && b>c)
        console.log(b);
    else
        console.log(c);
    return threenumbers
}
let result=threenumbers(10,20,30)
console.log(result)



//