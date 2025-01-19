const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS middleware
const UrlRoute=require("./routes/routes");

const app = express();

dotenv.config();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/complain",UrlRoute)

// Database connection and server start
const start = async () => {
  try {
    await mongoose.connect(process.env.mongo_url);
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 3000, () => console.log('Server running on port 3000'));
  } catch (error) {
    console.error(error);
  }
};

start();
    