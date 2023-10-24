require('dotenv').config();

const express = require("express");
const app = express();
const services_routes = require("./routes/services");
const connectDB = require("./db/connect");


const PORT = process.env.PORT || 3000;



app.get("/", (req, res) => {
  res.send("Hii I am live");
});

// Corrected route definition
app.use("/api/services", services_routes);

const start = async () => {
    try {
      await connectDB(process.env.MOMGODB_URL);
      app.listen(PORT, () => {
        console.log(`${PORT}  YES I AM CONNECTED`);
      });
    } catch (error) {
      console.error("Error starting the server:", error.message);
    }
  };

start();
