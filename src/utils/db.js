import mongoose from "mongoose";

const connect = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        console.error("Connection error:", error);
        throw new Error("Connection failed!");
    }
}

export default connect;