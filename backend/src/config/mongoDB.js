import mongoose from "mongoose";

const connect = async () => {

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB fired up");
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
  }
};

export default connect;
