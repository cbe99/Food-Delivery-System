const validateMerchant = (merchantData) => {
    const { restaurantName, contactName, pincode, location, website, phoneNumber, averageDailyTransactions } = merchantData;

    if (!restaurantName || !contactName || !pincode || !location || !website || !phoneNumber || !averageDailyTransactions) {
        return { error: "All fields are required" };
    }

    // string validation
    const restaurantNameValidation = validateName('restaurantName', restaurantName, 2, 50);
    if (restaurantNameValidation.error) {
        return restaurantNameValidation;
    }

    const contactNameValidation = validateName('contactName', contactName, 2, 50);
    if (contactNameValidation.error) {
        return contactNameValidation;
    }

    // num validation
    const pincodeValidation = validateNumber('pincode', pincode, 6);
    if (pincodeValidation.error) {
        return pincodeValidation;
    }

    const phoneNumberValidation = validateNumber('phoneNumber', phoneNumber, 10);
    if (phoneNumberValidation.error) {
        return phoneNumberValidation;
    }

    const averageDailyTransactionsValidation = validateNumber('averageDailyTransactions', averageDailyTransactions);
    if (averageDailyTransactionsValidation.error) {
        return averageDailyTransactionsValidation;
    }

    // return null if no error
    return { error: null };
};

const validateName = (name, value, minLength, maxLength) => {
    if (value.length < minLength || value.length > maxLength) {
        return { error: `${name} must be between ${minLength} and ${maxLength} characters` };
    }

    return { error: null };
};

const validateNumber = (merchantNumber, value, numSize = null) => {
    if (isNaN(value)) {
        return { error: `${merchantNumber} must be a number` };
    }
    if (numSize && value.toString().length !== numSize) {
        return { error: `${merchantNumber} must be of ${numSize} digits` };
    }

    return { error: null };
};

module.exports = {
    validateMerchant,
};
