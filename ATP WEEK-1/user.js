//call back is an function send as arg to another function
function test1(a){
    console.log(a())

}
//here,ananymous function is a callback function
test1(function(){
    return "hello"
})
