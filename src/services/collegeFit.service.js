import { supabase } from "../config/supabase.js";

export const recommendColleges = async (profile) => {

const { data } =
await supabase.from("colleges").select("*");

return data.filter(college => {

if(profile.state && college.state !== profile.state)
return false;

if(profile.budget && college.budget !== profile.budget)
return false;

return true;

});

};