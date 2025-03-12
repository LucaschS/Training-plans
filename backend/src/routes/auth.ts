import express from "express";

const authController = require("../controllers/auth");

const router = express.Router();

router.post("/login", authController.postLogin);
router.get("/login", authController.getLogin);

export const loginRouter = router;
