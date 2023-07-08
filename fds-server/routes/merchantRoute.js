const express = require("express");
const MerchantModel = require("../models/merchantModel");
const { validateMerchant } = require("../utils/validators");

const router = express.Router();

// POST /api/{apiVersion}/register
router.post("/register", async (req, res) => {
    try {
        const validationResult = validateMerchant(req.body);
        if (validationResult.error) {
            return res.status(400).json({ error: validationResult.error });
        }

        const { restaurantName, contactName, pincode, location, website, phoneNumber, averageDailyTransactions } = req.body;


        // Check if the merchant already exists with the same details
        const existingMerchant = await MerchantModel.findOne({
            restaurantName,
            contactName,
            pincode,
            location,
            website,
            phoneNumber,
            averageDailyTransactions,
        });

        if (existingMerchant) {
            return res.status(409).json({ error: "Merchant already exists" });
        }

        // Create the new merchant
        const newMerchant = await MerchantModel.create(req.body);
        return res.status(201).json({ message: "Account created successfully", merchant: newMerchant });
    } catch (error) {
        console.error("Error creating account:", error);
        return res.status(500).json({ error: "Database error", details: error.message });
    }
});

module.exports = router;