const express =require("express");
const mongoose=require("mongoose");
const dotenv =require("dotenv");
var cors = require('cors');

const app=express();
const port=5500;

const CategoryRoute=require("./routes/Categories.js");

dotenv.config()

// async function start(){
//     try{
//         await mongoose.connect(process.env.MANGO_URI, {
//             useNewUrlParser: true,
//             useFindAndModify: false
//         })
//         app.listen(port, () =>{
//             console.log(`Server ${port} portunda ise dusdu`)
//         })
//     }catch (error){
//         throw error
//     }
// }

// start()

const connect=async()=>{
    try{
     await mongoose.connect(process.env.MANGO_URI)  
    }catch (error){
        throw error
    }
}
app.use(express.json());
app.use(cors());

app.use("/api",CategoryRoute);
app.get("/", (req,res)=>res.send("Salam"))

app.listen(port, ()=>{
    connect()
    console.log(`Server ${port} portunda ise dusdu`)
})