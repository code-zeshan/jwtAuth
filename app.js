import express from "express"
import config from "config"
import userrouter from "./controllers/users/index.js"

const app = express();
const PORT = 5000

app.use(express.json())

app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg:"Hello World!"})
    } catch (error) {
        res.status(500).json({msg:error})
    }
})

app.use("/api/users",userrouter)

app.listen(PORT,()=>{
    console.log(`The Server is running!`);
})