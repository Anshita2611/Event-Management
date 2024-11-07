import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI,{dbName: "MERN_STACK_EVENT_MESSAGE"}).then(()=>{
        console.log("Database is connected")
    }).catch((err)=>{
        console.log("Error in connecting to the database", err)
    })
}