const { connect, connection } = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// connect to the database
const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/flowerShopDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;