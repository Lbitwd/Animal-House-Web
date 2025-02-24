const mongoose = require('mongoose');
// require('dotenv').config(); 
require('dotenv').config({path:__dirname+'/.env'});

const connect = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI);
  if (!conn) {
    console.log('Could not connect to database.');
    return;
  }
  console.log('Connected to database successful!.');
};

module.exports = connect;