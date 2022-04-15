const mongoose = require("mongoose");

async function database() {
  try {
    mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Running");
  } catch (error) {
    console.log("Database cant Running");
  }
}

module.exports = database;
