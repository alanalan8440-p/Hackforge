import { getRoadmap } from "../services/roadmap.service.js";

export const roadmap = async (req,res)=>{

const goal = req.params.goal;

const path = await getRoadmap(goal);

res.json(path);

};