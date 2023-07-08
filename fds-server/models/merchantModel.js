const mongoose = require('mongoose')

const MerchantSchema = new mongoose.Schema({
    restaurantName: String,
    contactName: String,
    pincode: Number,
    location: String,
    website: String,
    phoneNumber: Number,
    averageDailyTransactions: Number,
},
    {
        timestamps: true,
        versionKey: false
    })

const MerchantModel = mongoose.model("merchant", MerchantSchema);
module.exports = MerchantModel