import express from "express";
import { analyzeProfile, getCourses, addCourse } from "../controllers/course.controller.js";

const router = express.Router();

/* Get all courses */
router.get("/", getCourses);

/* Add a course */
router.post("/", addCourse);

/* Analyze student profile */
router.post("/analyze", analyzeProfile);

export default router;