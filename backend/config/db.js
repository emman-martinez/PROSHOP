import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // useCreateIndex: true, // option usecreateindex is not supported
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${ conn.connection.host }`.cyan.underline);
    } catch (error) {
        console.log(`Error: ${ error.message }`.red.underline.bold);
        process.exit(1);
    }
};

export default connectDB;