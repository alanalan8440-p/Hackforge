import supabase from "../config/supabase.js";

export const getCourses = async (req, res) => {
  try {

    const { data, error } = await supabase
      .from("courses")
      .select("*");

    if (error) throw error;

    res.json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addCourse = async (req, res) => {
  try {

    const {
      course_id,
      course_name,
      domain,
      duration,
      difficulty,
      required_skills,
      career_paths,
      average_salary
    } = req.body;

    const { data, error } = await supabase
      .from("courses")
      .insert([
        {
          course_id,
          course_name,
          domain,
          duration,
          difficulty,
          required_skills,
          career_paths,
          average_salary
        }
      ])
      .select();

    if (error) throw error;

    res.json({
      message: "Course added successfully",
      data
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const analyzeProfile = async (req, res) => {
  try {

    const { interests } = req.body;

    const { data, error } = await supabase
      .from("courses")
      .select("*");

    if (error) throw error;

    const recommended = data.filter(course =>
      interests.includes(course.domain.toLowerCase())
    );

    res.json({
      message: "Profile analyzed",
      recommended_courses: recommended
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};