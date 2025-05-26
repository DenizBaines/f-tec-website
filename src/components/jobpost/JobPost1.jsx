import React from 'react';
import './JobPost1.css';

const JobPost1 = () => {
  return (
    <div className="jobpost-container">
      <div className="job-card">
        <div className="job-date-box">
          <div className="job-date">02</div>
          <div className="job-month">Jan 2019</div>
        </div>

        <div className="job-content">
          <p className="job-location">📍 Delhi</p>
          <h2 className="job-title">Program Manager</h2>
          <p className="job-summary">
            As Program Manager, you would be a single point of contact for Pradhan Mantri Kaushal Kendra (PMKK) in the state of Uttarakhand & Rajasthan.
          </p>

          <h3>Responsibilities</h3>
          <ul className="job-list">
            <li>To provide support to each PMKK run & operate by the organization</li>
            <li>To frame policies for right kind of mobilization, ensuring implementation and formation of batches as per Training Calendar</li>
            <li>Monitoring of training as per mandate set out under NSQF framework at each PMKK</li>
            <li>Ensuring quality standards as set out for PMKK and in-house quality policies of the organization</li>
          </ul>

          <h3>Eligibility / Basic Qualifications</h3>
          <ul className="job-list">
            <li>Bachelor’s Degree in any stream</li>
            <li>Minimum 2 years of working experience in the skill domain specially NSQF framework under some Govt. scheme</li>
            <li>Minimum one year of experience of working at a Training Centre in any capacity</li>
            <li>The profile will include travel of minimum 10 days in a month</li>
          </ul>

          <p className="job-mail">
            Mail your resume at <a href="mailto:mailus@f-tec.net.in">mailus@f-tec.net.in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobPost1;
