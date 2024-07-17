const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categoriesModel = new schema({
    type: {
        type: String,
        default: 'Investment'
    },
    color: {
        type: String,
        default: 'rgb(54, 162, 235)'
    }
});

const transactionModel = new schema({
    name: {
        type: String,
        default: 'Anonymous'
    },
    type: {
        type: String,
        default: 'Investment'
    },
    amount: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports.categories = mongoose.model('categories', categoriesModel);
module.exports.transactions = mongoose.model('transactions', transactionModel);