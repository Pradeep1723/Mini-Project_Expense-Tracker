const { Categories, Transactions } = require("../models/model");

// GET Categories
const getCategories = async (req, res) => {
    const categoriesData = await Categories.find({});
    return res.json({ categories: categoriesData });
};

// Create Category
const createCategory = (req, res) => {
    if (!req.body) {
        return res.status(400).json('Category body data cannot be empty');
    }

    const { type, color } = req.body;
    const newCategory = new Categories({
        type,
        color
    });

    newCategory.save().then(category => {
        res.json({
            success: true,
            message: 'Category created successfully',
            data: category
        });
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: 'Error creating category',
            error: err
        });
    });
};

// GET Transactions
const getTransactions = async (req, res) => {
    const transactionsData = await Transactions.find({});
    return res.json({ transactions: transactionsData });
};

// Create Transactions
const createTransactions = (req, res) => {
    if (!req.body) {
        return res.status(400).json('Transaction body data cannot be empty');
    }

    const { type, amount, name } = req.body;
    const newTransaction = new Transactions({
        type,
        amount,
        name,
    });

    newTransaction.save().then(transaction => {
        res.json({
            success: true,
            message: 'Transaction created successfully',
            data: transaction
        });
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: 'Error creating transaction',
            error: err
        });
    });
};

const deleteTransaction = async (req, res) => {
    if (!req.body) {
        return res.status(400).json('Transaction body data cannot be empty');
    }

    await Transactions.deleteOne(req.body, (err) => {
        if (!err) {
            res.json({ message: 'Transaction deleted successfully!' });
        }
    }).clone().catch((err) => {
        res.json({
            message: 'Error while deleting transaction',
            error: err
        });
    });
};

const getLabels = async (req, res) => {
    try {
        const result = await Transactions.aggregate([
            {
                $lookup: {
                    from: 'categories',
                    localField: 'type',
                    foreignField: 'type',
                    as: 'categories_info'
                }
            },
            {
                $unwind: '$categories_info'
            }
        ]);

        const data = result.map(val => Object.assign({}, {
            _id: val._id,
            amount: val.amount,
            name: val.name,
            color: val.categories_info.color,
            type: val.type
        }));
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Lookup collection error', error: err });
    }
};

module.exports = { getCategories, createCategory, getTransactions, createTransactions, deleteTransaction, getLabels };