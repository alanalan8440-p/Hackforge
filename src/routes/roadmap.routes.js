import express from "express";
import { roadmap } from "../controllers/roadmap.controller.js";

const router = express.Router();

router.get("/:goal", roadmap);

export default router;