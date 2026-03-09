export const calculateScore = (user, course) => {

let score = 0;

if (course.stream_fit?.includes(user.stream)) score += 20;

const interests =
user.subjectInterests?.filter(i =>
course.interests_fit?.includes(i)
).length || 0;

score += interests * 10;

const work =
user.workPreferences?.filter(i =>
course.work_fit?.includes(i)
).length || 0;

score += work * 7;

const strengths =
user.strengths?.filter(i =>
course.strengths_fit?.includes(i)
).length || 0;

score += strengths * 7;

const goals =
user.goals?.filter(i =>
course.goals_fit?.includes(i)
).length || 0;

score += goals * 7;

if (course.budget_fit?.includes(user.budget)) score += 10;

return Math.min(score, 100);

};