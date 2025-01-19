const express= require('express');
const UrlRoute=require('./routes/routes')
const app = express();
require('dotenv').config();
const connectDB = require('./db/connect');
const port = process.env.PORT || 3000;
const start = async () => {
    try {
      await connectDB(process.env.mongo_url);
      console.log('connect to DB')
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
app.use(express.urlencoded({extended:false}))
app.use(express.json());
  app.use("/complain",UrlRoute);
  
  
  start();