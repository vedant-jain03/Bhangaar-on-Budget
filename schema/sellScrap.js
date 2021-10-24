const mongoose  = require('mongoose')
const SellScrapSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Pending"
    }
})

const Sell = mongoose.model('SellModel',SellScrapSchema);
module.exports = Sell;

