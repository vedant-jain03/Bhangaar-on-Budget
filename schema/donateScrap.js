const mongoose  = require('mongoose')
const DonateScrapSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    donate_to: {
        type: String,
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
    }
})

const Donate = mongoose.model('DonateModel',DonateScrapSchema);
module.exports = Donate;

