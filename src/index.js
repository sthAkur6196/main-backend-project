// require("dotenv").config({path:"./env"});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js"

dotenv.config({
    path: "./env"
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR : Server Connection Establishment Failed :::: ", error);
    });
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at PORT : ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("MONGO DB Connection Failed ::::: ",err);
})


// -------------------- BASIC APPROACH TO CONNECT THE DATABASE -----------------------
// -----------------------------------------------------------------------------------


/*
import mongoose  from "mongoose";
import { DB_NAME } from "./constants.js";

import express from "express";
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",()=>{
            console.log("ERROR : ",error);
            throw error;
        })        

        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR : ",error);
        throw error;
    }
} )()


*/