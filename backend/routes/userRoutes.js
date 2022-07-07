import express from "express";
import {
    authUser,
    getUserProfile,
    registerUser,
} from "../controllers/userController.js";
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

// @desc Register a new user
// @route POST /api/users
// @access Public
router.post("/", registerUser);

export default router;