//let bugReports = []; // In-memory storage for bug reports
const pool = require("../db");

exports.submitBugReport = async (req, res) => {
  const {
    title,
    description,
    error_trace,
    environment,
    severity,
    reproducibility,
  } = req.body;

  // Simple validation
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required." });
  }

  try {
    const result = await pool.query(
      `INSERT INTO bug_reports (
      title, description, error_trace,
      environment, priority, reproducibility
      ) VALUES ('Test bug','Description','Error trace','{"details":"env info"}','Medium','Steps to reproduce')
      RETURNING *`,
    );
    console.log("Inserting bug report with values:", [
      title,
      description,
      error_trace,
      environment,
      severity,
      reproducibility,
    ]);

    res
      .status(201)
      .json({ message: "Bug report submitted", report: result.rows[0] });
  } catch (error) {
    console.error("Error saving bug report:", error);
    res.status(500).json({ error: "Failed to save bug report" });
  }
};

exports.getBugReports = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM bug_reports ORDER BY submitted_at DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching bug reports:", error);
    res.status(500).json({ error: "Failed to fetch bug reports" });
  }
};
