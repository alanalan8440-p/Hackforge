export const generateRoadmap = async (req, res) => {
  try {

    const { course } = req.body;

    const roadmap = [
      "Learn Basics",
      "Practice Projects",
      "Internships",
      "Advanced Concepts"
    ];

    res.json({
      message: "Roadmap generated",
      roadmap
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};