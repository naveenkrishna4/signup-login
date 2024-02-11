const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECT_STRING);
    console.log(
      "Database connected.",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectdb;
