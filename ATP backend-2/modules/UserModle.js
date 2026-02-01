//create user schema and model(username,password)
//crate user module using that
import{Schema,model} from 'mongoose';

const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        minlength:[4,"min lenth should be 4"],
        maxlength:[6,"max length excedded"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minlength:[6,"min lenth should be 6"]
    },
    age:{
        type:Number,
        required:[true,"Age is required"],
        min:[18,"Min age is 18"],
        max:[25,"age should be less than 25"]
    }

})
export const UserModel=model("User",userSchema)