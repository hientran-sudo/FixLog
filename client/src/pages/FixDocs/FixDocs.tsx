import React, { useState } from "react";
import './FixDocs.css';

function FixDocsWizard() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    stepTitle: "Checked API response", // Default Title
    actionDescription: "Sent request using Postman to the endpoint", // Default Action Description
    outcome: "Received 500 server error", // Default Outcome
    attachments: "", // Default Attachments
    isVerified: false, // Default Verified state
    outcomeStatus: "Resolved", // Default Outcome Status
  });

  const [submitted, setSubmitted] = useState(false); // To track if the form is submitted

  const steps = [
    {
      title: "Step Title",
      content: (
        <input
          type="text"
          placeholder="Enter step title"
          value={formData.stepTitle}
          onChange={(e) => setFormData({ ...formData, stepTitle: e.target.value })}
        />
      ),
    },
    {
      title: "Action Description",
      content: (
        <textarea
          placeholder="Describe the action taken"
          value={formData.actionDescription}
          onChange={(e) => setFormData({ ...formData, actionDescription: e.target.value })}
        />
      ),
    },
    {
      title: "Outcome",
      content: (
        <textarea
          placeholder="Describe the outcome of the action"
          value={formData.outcome}
          onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
        />
      ),
    },
    /*
    {
      title: "Attachments",
      content: (
        <input
          type="file"
          multiple
          onChange={(e) => setFormData({ ...formData, attachments: e.target.files })}
        />
      ),
    },
    */
    {
      title: "Step Verification",
      content: (
        <div>
          <label>
            Step Verified?
            <input
              type="checkbox"
              checked={formData.isVerified}
              onChange={(e) => setFormData({ ...formData, isVerified: e.target.checked })}
            />
          </label>
        </div>
      ),
    },
    {
      title: "Outcome Status",
      content: (
        <select
          value={formData.outcomeStatus}
          onChange={(e) => setFormData({ ...formData, outcomeStatus: e.target.value })}
        >
          <option value="Resolved">Resolved</option>
          <option value="Need More Info">Need More Info</option>
          <option value="Escalated">Escalated</option>
        </select>
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

  const handleSubmit = () => {
    setSubmitted(true); // Mark the form as submitted
  };

  if (submitted) {
    return (
      <div className="fix-doc-wizard">
        <h3>Documentation Submitted!</h3>
        <p>Your troubleshooting documentation has been successfully submitted.</p>
        <p>
          <a href="/" className="btn-home">Return to Home</a>
        </p>
      </div>
    );
  }

  return (
    <div className="fix-doc-wizard">
      <h2>Troubleshooting Documentation Wizard</h2>
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

export default FixDocsWizard;
