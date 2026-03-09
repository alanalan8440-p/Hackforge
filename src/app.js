import express from "express";
import cors from "cors";
import morgan from "morgan";

import courseRoutes from "./routes/course.routes.js";
import collegeRoutes from "./routes/college.routes.js";
import roadmapRoutes from "./routes/roadmap.routes.js";
import chatRoutes from "./routes/chat.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/courses", courseRoutes);
app.use("/api/colleges", collegeRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/chat", chatRoutes);

export default app;