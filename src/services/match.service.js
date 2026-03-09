import supabase from "../config/supabase.js";
import { calculateScore } from "../utils/scoring.js";

export const matchCourses = async (user) => {

const { data: courses } =
await supabase.from("courses").select("*");

let results = courses.map(course => {

const score = calculateScore(user, course);

return {
course: course.name,
matchScore: score,
careers: course.careers,
studyAreas: course.study_areas
};

});

results.sort((a,b)=>b.matchScore-a.matchScore);

return results.slice(0,3);

};