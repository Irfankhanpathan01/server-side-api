import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const DATABASE_URL = process.env.DATABASE_URL;
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Connected to MongoDB successfully...");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    }
};

export default connectDB;
