import { calculateScore } from "../utils/scoring.js";

export const evaluateCourse = (user, course) => {

const score = calculateScore(user, course);

let category = "Safe Option";

if(score > 85) category = "Best Fit";
if(score < 70) category = "Ambitious Option";

return {
course: course.name,
matchScore: score,
category,
careers: course.careers,
studyAreas: course.studyAreas
};

};