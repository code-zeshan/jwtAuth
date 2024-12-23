import mongoose from "mongoose";
import config from "config";

async function dbConnect(){
    try{
    let dbURL = "mongodb+srv://zeshancode:zeshancode@zeshancode.1u1ir.mongodb.net/Auth"
    await mongoose.connect(dbURL)
    console.log("Console Log connected successfully!");
}
    catch(error){
        console.log(error);
    }

}


dbConnect();
