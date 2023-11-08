import express from "express";
import authController from "../controllers/authCOntroller.js";
const router = express.Router();

router.post("/users/register", authController.userRegistration);
router.post("/users/login", authController.userLogin);

export default router;
