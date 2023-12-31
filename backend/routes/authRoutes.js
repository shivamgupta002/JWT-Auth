import express from "express";
import authController from "../controllers/authCOntroller.js";
import checkIsUserAuthenticated from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/users/register", authController.userRegistration);
router.post("/users/login", authController.userLogin);

//Protected Routes
router.post(
  "/users/change-password",
  checkIsUserAuthenticated,
  authController.changePassword
);

export default router;
