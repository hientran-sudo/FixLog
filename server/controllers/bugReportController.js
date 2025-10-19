let bugReports = []; // In-memory storage for bug reports

exports.submitBugReport = async (req, res) => {
  const {
    issueTitle,
    description,
    errorMessage,
    envDetails,
    browser,
    severity,
    stepsToReproduce,
  } = req.body;

  // Simple validation
  if (!issueTitle || !description) {
    return res.status(400).json({ error: 'Title and description are required.' });
  }

  const report = {
    id: Date.now(),
    issueTitle,
    description,
    errorMessage,
    envDetails,
    browser,
    severity,
    stepsToReproduce,
    submittedAt: new Date(),
  };

  bugReports.push(report);

  res.status(201).json({ message: 'Bug report submitted', report });
};

// Optional: To view all submitted bug reports (Admin/debugging)
exports.getBugReports = (req, res) => {
  res.json(bugReports);
};
