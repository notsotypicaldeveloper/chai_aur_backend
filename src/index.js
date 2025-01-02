// require('dotenv').config({path: './env'});
import 'dotenv/config'
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";

// dotenv.config({
//     path: './env'
// })

connectDB()














/*
const app = express();


;(async()=>{
    try {
        // donot forget await 
        mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`);

    app.on("error", (err)=> {
        console.log("App getting error connecting with database", err);
        throw err;
    })

    app.listen(process.env.PORT, ()=> {
        console.log(`App is listening on port: ${process.env.PORT}`)
    })
    }
    catch(error) {
        console.error("ERROR: ", error);
        throw error;
    }
})()
*/