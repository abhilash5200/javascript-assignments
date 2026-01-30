import exp from 'express';
//create  mini -express (separate route )app
export const userApp=exp.Router();

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
let users =[];

//create API(req handlers-route)
     //get req handling route(read users)
     userApp.get('/users',(req,res)=>{
        //send users data as res
        res.status(200).json({message:"all users",payload:users});//message and payload
        
     })




     //post req handling route(create user)
     userApp.post('/users',(req,res)=>{
       //get user data from req body
       let newUser = req.body;
       //console.log("newUser",newUser);
       //insert new user into users array
         users.push(newUser);
         //send res
         res.status(201).json({message:"user created successfully",payload:newUser});
       
     })

     //put req handling route(update user)
       // put req handling route (update user)
userApp.put('/users/:id', (req, res) => {
    //get user data from req body

    let modifiedUser = req.body;
    console.log("modifiedUser", modifiedUser);
    //find user index 

    let userId = Number(req.params.id);
    //get modified user from req body

    let userIndex = users.findIndex((user) => user.id === userId);
    console.log("userIndex", userIndex);
    //if user not found

    if (userIndex === -1) {
        res.status(404).json({ message: "user not found" });
        return;
    }

    //modify user 

    users[userIndex] = { id: userId, ...modifiedUser };
    //send response(only once)

    res.status(200).json({
        message: "user modified successfully",
        payload: users[userIndex]
    });
});
// READ USER BY ID
userApp.get('/users/:id', (req, res) => {

    console.log(req.params);

    // read id from url parameter 
    let userid = Number(req.params.id);

    // read user by this id 
    let user = users.find(userObj => userObj.id === userid);

    if (!user) {
        res.status(404).json({ message: "user not found" });
        return;
    }

    // send response
    res.status(200).json({
        message: "user by id",
        payload: user
    });
});


     //delete req handling route(delete user)
       // DELETE USER BY ID
userApp.delete('/users/:id', (req, res) => {

    // read id from url parameter
    let userid = Number(req.params.id);

    // find user index by id
    let userIndex = users.findIndex(userObj => userObj.id === userid);

    // if user not found
    if (userIndex === -1) {
        res.status(404).json({ message: "user not found" });
        return;
    }

    // delete user
    users.splice(userIndex, 1);

    // send response
    res.status(200).json({ message: "user deleted successfully" });
});