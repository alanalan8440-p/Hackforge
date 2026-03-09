import express from "express";
import { getColleges } from "../controllers/college.controller.js";

const router = express.Router();

router.post("/recommend", getColleges);

export default router;