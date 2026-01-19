let isloggedin=true
let isprofilecomplete=false

if(isloggedin === false)
 console.log("please login");
else if(isloggedin === true && isprofilecomplete === false)
 console.log("please complete your profile")
else
 console.log("welcome")