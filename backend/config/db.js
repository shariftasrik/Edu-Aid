import mongoose from "mongoose";

export const connectDB =async ()=>{
    await mongoose.connect('mongodb+srv://utshacse20220104080:zxPIlMnpCfwaMAs0@cluster0.ybdzrfe.mongodb.net/EDU-AIDE').then(()=>console.log("DB connected"))
}