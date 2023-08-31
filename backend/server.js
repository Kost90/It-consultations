const express = require("express");
const cors = require("cors");
const {testConnection} = require('./models/conn');
const dotenv = require('dotenv');
// const {createTables} = require('./models/setUp')

// const mongoose = require('mongoose');

const userRoutes = require("./Routes/UserRoutes");
const questionsRoutes = require("./Routes/QuestionsRoutes");
const loginUserRoutes = require("./Routes/LoginUserRoutes");
const answersRoutes = require("./Routes/AnswersRoutes");;
const contactUsRoutes = require('./Routes/ContactUsRoutes')

const app = express();
const port = 8000;

testConnection();

dotenv.config();

// const connect = async ()=>{
//     try {
//         await mongoose.connect(process.env.MONGO);
//         console.log("Connected to MongoDB")
//     } catch (error) {
//         throw error;
//     }
// }

app.use(cors());
app.use(express.json());
// createTables()

app.use("/users", userRoutes);
app.use("/loginuser", loginUserRoutes);
app.use("/questions", questionsRoutes);
app.use("/answers", answersRoutes);
app.use("/contactus", contactUsRoutes);

app.use((err, req, res, next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
  });
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  // connect()
});
