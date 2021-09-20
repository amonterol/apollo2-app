const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const config = require("../config/dev");
require("./models/product");
require("./models/user");

exports.connect = () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  };
  mongoose
    .connect(config.DB_URI, options)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => {
      console.error("Error while connecting to MongoDB", error);
    });
};

exports.initSessionStore = () => {
  const store = new MongoDBStore({
    uri: config.DB_URI,
    collection: "portfolioSessions",
  });

  return store;
};
