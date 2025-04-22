const mongoose = require('mongoose');
const cdb =  async () => {
    const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/passes';

    try {
        const connection =  mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully');
        return connection; // Return the Mongoose connection
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

module.exports = cdb;