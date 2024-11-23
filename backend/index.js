import express from "express"
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors'

const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    // console.log(req);
    return res.status(234).send("welcome to mern stack project");
})

app.use("/books",booksRoute)

mongoose.connect(mongoDBURL)
.then(()=>{
    console.log("app connected to console successfully");
    app.listen(PORT,()=>{
        console.log("app is running to port: "+PORT);
    });
})
.catch((err)=>{
    console.log(err)
})