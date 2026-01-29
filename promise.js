console.log("Abhi promises his gf");
console.log("gf is waiting for promise");
let futureavailability=false;
let PromiseObj=new Promise((fullfill,rejected)=>{
     setTimeout(() => {
        if(futureavailability===true){
            fullfill(" abhi gf is happy");
        }else{
            rejected("abhi breakup");
        }
}, 2000);
});
//CONSUME A PROMISE()
PromiseObj
.then((message)=>console.log("abhifullfilleed gf promise",message))//when promise is fullfilled
.catch((error)=>console.log("abhi broke the promise",error));//when promise is rejected
console.log("gf is sad");