const mongoose = require('mongoose');

const db = async () => {
	try {
		await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
		console.log('Connected to the DB');
		return true;
	} catch (error) {
		console.error(`DB Connection Error: ${error}`);
		return false;
	}
};

module.exports = { db };
