import mongoose from "mongoose";
const connectDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/jwtToken")
    .then(() => {
      console.log("Connection successfully established");
    })
    .catch((e) => {
      console.log(e.message);
    });
};
export default connectDB;
