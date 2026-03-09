import { supabase } from "../config/supabase.js";

export const getRoadmap = async (goal)=>{

const { data } =
await supabase
.from("career_paths")
.select("*")
.eq("goal",goal)
.single();

return data;

};