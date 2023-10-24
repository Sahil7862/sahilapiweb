require('dotenv').config();

const connectDB = require("./db/connect");
const Service = require("./models/service"); // Assuming you've exported your model as "Service" in models/service.js
const serviceJson = require("./service.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Service.deleteMany();
        await Service.create(serviceJson); // Using "Service" instead of "service"
        
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
}

start();
