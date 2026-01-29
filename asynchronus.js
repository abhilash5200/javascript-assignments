//javascript is a single-threaded language, meaning it can execute one command at a time. However, it can handle asynchronous operations using callbacks, promises, and async/await syntax.

//Asynchronous operations allow JavaScript to perform tasks like fetching data from a server, reading files, or waiting for user input without blocking the main thread.

// a single thread can do one task at a time but asynchronous programming allows multiple tasks to be initiated and completed independently.
//browser javascript runtime =javaScript engine+Web APIs+Event Loop
//nodejs runtime=javaScript engine+ nodejs+Event Loop

//3 members ordered food
//person1 ordered biryani
console.log("person1 ordered biryani");
setTimeout(() => {
    console.log("order 1 is ready")
}, 2000);
//person2 ordered curd rice
console.log("person2 ordered curd rice");
setTimeout(() => {
    console.log("order 2 is ready")
}, 3000);



//person3 ordered water bottle
console.log("person3 ordered water bottle");

setTimeout(() => {
    console.log("order 3 is ready")
}, 0);

//only main thread executes blocking code,synchronous code,unsynchronous code


// synchronus blocking code
//asynchronus non-blocking code
//synchrnous non-blocking code
//asynchronus blocking code

//setinterval

//promises
//promiser is producer and to whom promise is given is consumer

//CREATE A PROMISE(kiran)
console.log("start of the script");
let futureavailability=true;
let PromiseObj=new Promise((fullfill,rejected)=>{
     setTimeout(() => {
        if(futureavailability===true){
            fullfill(" hello frnd how r u");
        }else{
            rejected("sorry not available");
        }
}, 2000);
});
//CONSUME A PROMISE()
PromiseObj
.then((message)=>console.log(message))//when promise is fullfilled
.catch((error)=>console.log(error));//when promise is rejected
console.log("end of the script");




//modern way to consome the promise
// async function consumePromise(){
//     letres=await PromiseObj;
//     console.log(letres);
// }

//xml
//json

