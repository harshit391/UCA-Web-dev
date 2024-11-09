import mongoose from "mongoose"

export const connectDB = async () => 
{
    const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/';
    
    try 
    {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB");
    } 
    catch (error) 
    {
        console.log("Error connecting to MongoDB: ", error);
    }
}
