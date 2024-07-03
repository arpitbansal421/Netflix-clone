const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI
         
    );
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Error occurred: " + error);
    }
};

module.exports = databaseConnection;
