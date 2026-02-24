import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "You accessed protected route",
    userId: req.user.id
  });
});

export default router;
