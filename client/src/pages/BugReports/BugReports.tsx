import React, { useState } from "react";
import './BugReports.css';

function BugReportWizard() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    issueTitle: "Login button not responsive", // Default Title
    description: "When I click the login button, nothing happens.", // Default Description
    envDetails: "OS version, browser, frameworks",
    errorMessage: "Copy and paste from logs",
    severity: "High", // Default Severity
    stepsToReproduce: "1. Open app 2. Click login button", // Default Steps
    browser: "Chrome", // Default Browser
  });

  const [submitted, setSubmitted] = useState(false); // To track if the form is submitted

  const steps = [
    {
      title: "Bug Title",
      content: (
        <input
          type="text"
          placeholder="Enter bug title"
          value={formData.issueTitle}
          onChange={(e) => setFormData({ ...formData, issueTitle: e.target.value })}
        />
      ),
    },
    {
      title: "Description",
      content: (
        <textarea
          placeholder="Describe the issue"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      ),
    },
    {
      title: "Error Message",
      content: (
        <textarea
          placeholder="Copy and paste from logs"
          value={formData.errorMessage}
          onChange={(e) => setFormData({ ...formData, errorMessage: e.target.value })}
        />
      ),
    },
    {
      title: "Environment Details",
      content: (
        <textarea
          placeholder="OS version, browser, frameworks"
          value={formData.envDetails}
          onChange={(e) => setFormData({ ...formData, envDetails: e.target.value })}
        />
      ),
    },
    {
      title: "Browser",
      content: (
        <select
          value={formData.browser}
          onChange={(e) => setFormData({ ...formData, browser: e.target.value })}
        >
          <option value="Chrome">Chrome</option>
          <option value="Firefox">Firefox</option>
          <option value="Safari">Safari</option>
          <option value="Edge">Edge</option>
        </select>
      ),
    },
    {
      title: "Severity",
      content: (
        <select
          value={formData.severity}
          onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Critical">Critical</option>
        </select>
      ),
    },
    {
      title: "Steps to Reproduce",
      content: (
        <textarea
          placeholder="List steps to reproduce the bug"
          value={formData.stepsToReproduce}
          onChange={(e) => setFormData({ ...formData, stepsToReproduce: e.target.value })}
        />
      ),
    },
    {
      title: "Review & Submit",
      content: (
        <div>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/bug-report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      const data = await response.json();
      alert(`Error: ${data.error}`);
    }
  } catch (error) {
    alert(`Submission failed`);
  }
};


  if (submitted) {
    return (
      <div className="bug-report-wizard">
        <h3>Bug Report Submitted!</h3>
        <p>Your bug report has been successfully submitted.
            <br />
            You can proceed to the troubleshooting page to investigate the issue:
        </p>
        <p> 
          <a href="/fixdocs" className="btn-troubleshoot">Go to Troubleshooting</a>
        </p>
      </div>
    );
  }

  return (
    <div className="bug-report-wizard">
      <h2>Bug Report Wizard</h2>
      <div className="step">
        <h3>{steps[step].title}</h3>
        {steps[step].content}
      </div>
      <div className="navigation">
        {step > 0 && (
          <button onClick={handleBack} className="btn-back">
            Back
          </button>
        )}
        {step < steps.length - 1 ? (
          <button onClick={handleNext} className="btn-next">
            Next
          </button>
        ) : (
          <button onClick={handleSubmit} className="btn-submit">
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default BugReportWizard;
