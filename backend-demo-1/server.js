//create HTTP server
//import express module
import exp from 'express';
import {userApp} from "./API/USER.js";
import {productApp} from "./API/product.js";
//create server
const app = exp();
      //asign port number
app.listen(3000,()=>console.log("HTTP server running on port number 3000"));
app.use(exp.json());//to parse json data from req body

//create a custom middleware
//function middleware1(req,res,next){
    //console.log("middleware1 executed");
    //send res
    //res.json({message:"res from middle ware"})
    //forward req to next middleware
   // next()
//}
//app.use(middleware1)
//to execute for every incoming req
//app.use(middleware1)

//craete user API(req handlers -route)


//test local in memory users data
app.use(userApp);
app.use(productApp);