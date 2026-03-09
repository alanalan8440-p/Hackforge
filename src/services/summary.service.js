export const generateSummary = (topCourses) => {

if(!topCourses.length) return "No match found";

const best = topCourses[0].course;

return `You are best suited for ${best} and related fields.`;

};

export const generatePath = () => {

return [
"Shortlist 3 courses",
"Compare fees and cutoff",
"Check colleges in your state",
"Discuss best-fit option with parents"
];

};