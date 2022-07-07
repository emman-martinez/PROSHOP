import express from "express";
import { authUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
router.post("/login", authUser);

// @desc Get User Profile
// @route GET /api/users/profile
// @access Private
router.get("/profile", protect, getUserProfile);

export default router;