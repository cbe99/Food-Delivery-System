const mongoose = require("mongoose");
require("dotenv").config();

const mongoDBUrl = process.env.MONGODB_URL;
try {
    mongoose.connect(mongoDBUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
} catch (err) {
    console.log("Database Not Connected");
}