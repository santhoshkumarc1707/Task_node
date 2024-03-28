const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to mongo DB");
  })
  .catch((err) => {
    console.log(err.message);
  });
