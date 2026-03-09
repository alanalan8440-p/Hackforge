export const getCourses = async (req, res) => {
  try {
    const courses = [
      { id: 1, name: "B.Tech Computer Science", category: "Engineering", duration: "4 years" },
      { id: 2, name: "MBBS", category: "Medical", duration: "5.5 years" },
      { id: 3, name: "BBA", category: "Commerce", duration: "3 years" }
    ];

    res.json(courses);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addCourse = async (req, res) => {
  try {
    const { name, category, duration } = req.body;

    res.json({
      message: "Course added successfully",
      course: { name, category, duration }
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const analyzeProfile = async (req, res) => {
  try {
    const { interests, marks } = req.body;

    let recommended = [];

    if (interests.includes("coding")) {
      recommended.push("B.Tech Computer Science");
    }

    if (interests.includes("biology")) {
      recommended.push("MBBS");
    }

    if (marks > 80) {
      recommended.push("Engineering");
    }

    res.json({
      message: "Profile analyzed",
      recommended_courses: recommended
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};