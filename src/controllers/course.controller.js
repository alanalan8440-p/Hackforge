import { matchCourses } from "../services/match.service.js";

export const analyzeProfile = async (req,res)=>{

const user = req.body;

const matches = await matchCourses(user);

res.json({
topMatches:matches,
summary:"Based on your interests these courses match you best"
});

};