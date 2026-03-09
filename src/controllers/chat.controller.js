import { askCareerAI } from "../services/aiChat.service.js";

export const chat = async (req,res)=>{

const { question } = req.body;

const answer = await askCareerAI(question);

res.json(answer);

};