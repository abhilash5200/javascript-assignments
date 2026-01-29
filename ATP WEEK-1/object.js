let test={
    a:1,
    b:2,
    c:3

}
//nupacking the object(destructuring)
let { a,b,c}=test;
console.log(a)






let student={
    sno:123,
    name:'abhi',
    marks:[10,20,30],
    address:{
        city:'hyderabad',
        state:'telangana',
        pincode:7234768
    },
    getAverage:function(){
        //object processing business logic
        let sum=0;
        for(let v of this.marks)
            sum+=v;
        let avg=sum/this.marks.length;
        console.log(avg);
    }

}
console.log(student.sno)
console.log(student.name)
console.log(student.marks)
console.log(student.address)
student.getAverage()