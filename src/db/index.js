import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=> {
    try {
        console.log(`URI = ${process.env.MONGO_DB_URI}/${DB_NAME}`);

        const connectionInstance = await mongoose.connect((`${process.env.MONGO_DB_URI}/${DB_NAME}`));

        console.log(`connectionInstance = ${connectionInstance}`);

        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

    }
    catch(error) {
        console.log("Our Error Logs:  MONGODB connection failed: ", error);
        process.exit(1);
    }
}
export default connectDB;
