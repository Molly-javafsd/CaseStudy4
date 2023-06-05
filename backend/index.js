const express = require('express')
const mongoose= require('mongoose')
const cors = require('cors')
const UserRouter= require('./Routes/userRouter')
const app= express();


app.use(cors());
app.use(express.json());
app.use(UserRouter)

const port = 8800;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

//connection to mongodb
async function connectToDatabase() {
    try {
      await mongoose.connect(
        "mongodb+srv://mollymukherjee:molly310@cluster0.60adhaq.mongodb.net/",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      console.log("connected to mongodb");
    } catch (error) {
      console.error("error connecting to mongodb", error);
      return;
    }
  }
  connectToDatabase();

