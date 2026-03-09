import express from "express";
import { analyzeProfile, getCourses, addCourse } from "../controllers/course.controller.js";

const router = express.Router();

router.get("/", getCourses);
router.post("/", addCourse);
router.post("/analyze", analyzeProfile);

export default router;