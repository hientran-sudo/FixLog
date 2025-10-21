import React, { useState } from "react";
import './BugReports.css';

function BugReportWizard() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    title: "Login button not responsive", // Default Title
    description: "When I click the login button, nothing happens.", // Default Description
    error_trace: "Copy and paste from logs",
    environment: "OS version, browser, frameworks",
    severity: "High", // Default Severity
    reproducibility: "1. Open app 2. Click login button", // Default Steps // Default Browser
  });

  const [submitted, setSubmitted] = useState(false); // To track if the form is submitted

  const steps = [
    {
      title: "Bug Title",
      content: (
        <input
          type="text"
          placeholder="Enter bug title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
      title: "Environment Details",
      content: (
        <textarea
          placeholder="OS version, browser, frameworks"
          value={formData.environment}
          onChange={(e) => setFormData({ ...formData, environment: e.target.value })}
        />
      ),
    },
    {
      title: "Error Message",
      content: (
        <textarea
          placeholder="Copy and paste from logs"
          value={formData.error_trace}
          onChange={(e) => setFormData({ ...formData, error_trace: e.target.value })}
        />
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
          value={formData.reproducibility}
          onChange={(e) => setFormData({ ...formData, reproducibility: e.target.value })}
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
