import authModel from "../models/authModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

class authController {
  // ----------------------- SignUp -----------------------------------
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

  // ----------------------- Login -----------------------------------
  static userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      if (email && password) {
        const isUser = await authModel.findOne({ email: email });
        if (isUser) {
          if (
            email === isUser.email &&
            (await bcryptjs.compare(password, isUser.password))
          ) {
            // Generate Token
            const token = jwt.sign({ userID: isUser._id }, "shivam", {
              expiresIn: "2d",
            });
            return res.status(200).json({ message: "Login Successful", token });
          } else {
            return res.status(400).json({ message: "Invalid Credentials" });
          }
        } else {
          return res.status(400).json({ message: "User not Registered" });
        }
      } else {
        return res.status(400).json({ message: "All fields are required" });
      }
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  };
  // ----------------------- Change password -----------------------------------
  static changePassword = async (req, res) => {
    const { newPassword, confirmPassword } = req.body;
    try {
      if (newPassword && confirmPassword) {
        if (newPassword === confirmPassword) {
          const genSalt = await bcryptjs.genSalt(10);
          const hashedPassword = await bcryptjs.hash(newPassword, genSalt);
          await authModel.findByIdAndUpdate(req.user._id, {
            password: hashedPassword,
          });
          return res
            .status(200)
            .json({ message: "Password change Successfully" });
        } else {
          return res
            .status(400)
            .json({ message: "Password and confirm password not match" });
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
