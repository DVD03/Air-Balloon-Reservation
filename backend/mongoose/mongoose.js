const mongoose = require("mongoose");
const mongodb_URI = process.env.MONGODB_URI;

mongoose.connect(mongodb_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connected!");
});
