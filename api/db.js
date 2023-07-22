const mongoose = require("mongoose")

// const mongoURL=`mongodb+srv://parthgharat2002:parthgharat2002@cluster0.f6qeyow.mongodb.net/?retryWrites=true&w=majority`

// const connectToMongoose= () => mongoose.connect(mongoURL,()=>{
//     console.log("Connecting to Mongoose")
// })

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://parthgharat2002:parthgharat2002@cluster0.f6qeyow.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

module.export =connectToMongoose