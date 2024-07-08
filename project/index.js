const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRouter');


app.use(express.json());

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Db connection Failed", err);
  });

  app.use(productRoutes)
  app.use(userRoutes);

app.listen(8086, () => {
  console.log("Server sarted at port 8086");
});
