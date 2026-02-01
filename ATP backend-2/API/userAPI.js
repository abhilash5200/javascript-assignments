import express from 'express';
import {UserModel} from '../modules/UserModle.js';

const router = express.Router();

//user API ROUTES
//create user
router.post('/create', async (req, res) => {
    //get new user from req
    let newUser = req.body;
    //create new user document
    let newUserDoc = new UserModel(newUser);
    //save in db
    await newUserDoc.save();
    //send res
    res.status(201).json({ message:"User created successfully", payload:newUserDoc });
})
//read user
router.get('/users', async (req, res) => {
    //read users from db
    let users = await userModel.find();
    //send res
    res.status(200).json({ message:"Users fetched successfully", payload:users });
});

router.get('/users/:id', async (req, res) => {
//get object id from url
let objID=req.params.id;
//find user in DB
let userObj=await UserModel.findById(objID);
//send res
res.status(200).json({message:"User fetched successfully",payload:userObj});

}
)
//update user
router.put('/update/:id', async (req, res) => {
    //get object id from url
    let objID = req.params.id;
    //get updated user from req
    let modifiedUser = req.body;
    //make update
    await UserModel.findByIdAndUpdate(objID,{ $set: { ...modifiedUser } });
    //send res
    res.status(200).json({ message:"User updated successfully" , payload: modifiedUser });
})

router.delete('/delete/:id', async (req, res) => {
    //get object id from url
    let objID = req.params.id;
    //delete user
    await UserModel.findByIdAndDelete(objID);
    //send res
    res.status(200).json({ message:"User deleted successfully" });
})

router.get('/test', (req, res) => {
    res.send('User API is working fine');
});

export default router;

//product 

