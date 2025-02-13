import { Router } from "express";
import { searchUser } from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/search", authMiddleware, searchUser);

export default router;
