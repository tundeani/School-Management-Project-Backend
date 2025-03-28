import express from "express";
import { 
  register, 
  login, 
  forgotPassword, 
  resetPassword, 
  getProfile // ✅ Imported getProfile function
} from "../controllers/authController.js";
import protect from "../middlewares/authMiddleware.js"; // ✅ Imported protect middleware

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/user/profile", protect, getProfile); // ✅ Fixed route & replaced `verifyToken` with `protect`

export default router;
