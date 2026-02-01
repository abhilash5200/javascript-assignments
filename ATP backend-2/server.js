import express from 'express';
import userRouter from './API/userAPI.js';
import productRouter from './API/productAPI.js';
import {connect} from 'mongoose'

const app = express();
app.use(express.json());
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


//CONNECT TO DATABSE

app.use('/user', userRouter);
app.use('/product', productRouter);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//error handling

