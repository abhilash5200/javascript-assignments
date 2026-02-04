import express from 'express';
import userRouter from './API/userAPI.js';
import productRouter from './API/productAPI.js';
import cookieParser from 'cookie-parser';
import {connect} from 'mongoose'

const app = express();
app.use(express.json());
app.use(cookieParser());

const port = 4000;

async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/anuragdb2')
        console.log("DB is connected")
        app.listen(port,()=>console.log("Server is running on port "+port));
    }
    catch(err){
        console.log("Error in connecting to DB",err)
    }
}

connectDB()

app.use('/user', userRouter);
app.use('/product', productRouter);
