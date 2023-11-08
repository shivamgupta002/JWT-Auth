import authModel from "../models/authModel.js";
import bcryptjs from "bcryptjs";

class authController {
  static userRegistration = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      if (name && email && password) {
        const isUser = await authModel.findOne({ email: email });
        if (isUser) {
          return res.status(400).json({ message: "User already found" });
        } else {
          //password hashing
          const genSalt = await bcryptjs.genSalt(10);
          const hashedPassword = await bcryptjs.hash(password, genSalt);

          //save the User
          const newUser = authModel({
            name,
            email,
            password: hashedPassword,
          });
          const reUser = await newUser.save();
          if (reUser) {
            return res
              .status(200)
              .json({ message: "Successfully Register", user: reUser });
          }
        }
      } else {
        return res.status(400).json({ message: "All Fields are required" });
      }
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  };
}
export default authController;

//-------------------------Also done by function -------------------------
// const authController = (req, res) => {
//   res.send("welcome");
// };
// export default authController;
