import { recommendColleges } from "../services/collegeFit.service.js";

export const getColleges = async (req,res)=>{

const profile = req.body;

const colleges = await recommendColleges(profile);

res.json(colleges);

};