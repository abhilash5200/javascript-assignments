import express from 'express';
import {UserModel} from '../modules/UserModle.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

//user API ROUTES
//create user
router.post('/create', async (req, res) => {
    //get new user from req
    let newUser = req.body;
    //hash the password
    let hashPassword=await bcrypt.hash(newUser.password,12)

    //replace the plain password with hashed password
     newUser.password = hashPassword;

    //create new user document
    let newUserDoc = new UserModel(newUser);
    //save in db
    await newUserDoc.save();
    //send res
    res.status(201).json({ message:"User created successfully", payload:newUserDoc });
})

router.post('/auth', async (req, res) => {

    let userCred = req.body;

    let userOfDB = await UserModel.findOne({
        username: userCred.username
    });

    if (userOfDB === null) {
        return res.status(404).json({ message: "User not found" });
    }

    //  bcrypt compare
    let status = await bcrypt.compare(
        userCred.password,
        userOfDB.password
    );

    if (status === false) {
        return res.status(404).json({ message: "Invalid credentials" });
    }

    let signedToken = jwt.sign(
        { username: userCred.username },
        'abcdef',
        { expiresIn: '1h' }
    );
    //save token as httponly cookie
    res.cookie("token",signedToken,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })

    res.status(200).json({
        message: "login success"
    });
});

//read user
router.get('/users', async (req, res) => {
    //read users from db
    let users = await UserModel.find();
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
})

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

router.get('/test', verifyToken, (req, res) => {
    res.json({message:"User API is working fine"})
});

export default router;
