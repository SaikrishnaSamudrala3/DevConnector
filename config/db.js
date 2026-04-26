const mongoose = require('mongoose');
const { getMongoUri } = require('./appConfig');

let connectionPromise;

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (connectionPromise) {
    return connectionPromise;
  }

  try {
    const db = getMongoUri();

    if (!db) {
      throw new Error('MONGO_URI is not configured');
    }

    connectionPromise = mongoose.connect(db);
    await connectionPromise;

    console.log('MongoDB Connected...');
    return mongoose.connection;
  } catch (err) {
    connectionPromise = null;
    console.error(err.message);

    if (process.env.VERCEL) {
      throw err;
    }

    process.exit(1);
  }
};

module.exports = connectDB;
