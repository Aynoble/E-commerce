const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const UserRoute = require("./routes/User");
const AuthRoute = require("./routes/Auth");
const ProductRoute = require("./routes/Product");

const app = express();

dotenv.config();

app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_KEY)
  .then(() => {
    console.log("DB connetion successful");
  })
  .catch((error) => {
    console.log("mongoDB not connected");
  });

app.use(express.json());

app.use("/api/auth", AuthRoute);
app.use("/api/user", UserRoute);
app.use("/api/product", ProductRoute);

app.listen(PORT, () => {
  console.log("server running on port" + " " + PORT);
});
