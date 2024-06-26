const mongoose = require('mongoose');

const db = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log('Connected to the DB');
	} catch (error) {
		console.error(`DB Connection Error: ${error}`);
	}
};

module.exports = { db };
