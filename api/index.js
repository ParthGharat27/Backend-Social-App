const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
// const connectDB = require('./db');
// app.use(express.json());
// connectDB();
dotenv.config();
// const connectDB = async () => {
//     try {
//       const conn = await mongoose.connect('mongodb+srv://parthgharat2002:<parthgharat2002>@cluster0.f6qeyow.mongodb.net/socialap?retryWrites=true&w=majority', {
//         useNewUrlParser: true,
//       });
//       console.log(`MongoDB Connected: {conn.connection.host}`);
//     } catch (error) {
//       console.error(error.message);
//       process.exit(1);
//     }
//   }
//   app.use(express.json());
//   connectDB() 

// const connectToMongoose = require('./db')

// connectToMongoose


// mongoose.connect(
// process.env.MONGO_URL,
// { useNewUrlParser: true, useUnifiedTopology: true },
// () => {
//   console.log("Connected to MongoDB");
// }
// );

mongoose.connect("mongodb+srv://parthgharat2002:parthgharat@social.1ljwscy.mongodb.net/socialp?retryWrites=true&w=majority")
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth",authRoute);

app.listen(8800,()=>{
    console.log("Backend server is running")
})