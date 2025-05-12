import React from 'react';
import './Career.css';


const Career = () => {
  // Sample job posting data - in a real app, this would come from an API or props
  const jobPostings = [
    {
      id: 1, 
      date: { day: '02', month: 'JAN', year: '2019' },
      location: 'Delhi',
      title: 'Manager – Business Development',
      url: '#'
    },
    {
      id: 2, 
      date: { day: '15', month: 'MAR', year: '2019' },
      location: 'Mumbai',
      title: 'Senior Training Coordinator',
      url: '#'
    },
    {
      id: 3, 
      date: { day: '28', month: 'APR', year: '2019' },
      location: 'Bangalore',
      title: 'Technical Instructor - IT Skills',
      url: '#'
    }
  ];

  return (
    <div className="career-container">
      {/* Hero Banner */}
      <div className="career-hero">
        <div className="career-hero-image">
          {/* This should be replaced with your actual image */}
          <img src="/images/careers.jpg" alt="Careers at our company" />
        </div>
      </div>

      {/* Career Message */}
      <div className="career-message">
        <div className="message-container">
          <p>
            Pursue your aspirations, let go of your inhibitions to join a vibrant organisation and build your career with the fastest growing skill development & training organisation.
          </p>
        </div>
      </div>

      {/* Connect Section */}
      <div className="connect-section">
        <h2>CONNECT WITH US</h2>
        
        {/* Job Listings */}
        <div className="job-listings">
          {jobPostings.map(job => (
            <div className="job-card" key={job.id}>
              <div className="job-date">
                <div className="date-box">
                  <span className="day">{job.date.day}</span>
                  <div className="month-year">
                    <span className="month">{job.date.month}</span>
                    <span className="year">,{job.date.year}</span>
                  </div>
                </div>
              </div>
              
              <div className="job-details">
                <div className="job-location">
                  <i className="location-icon">📍</i>
                  <span>{job.location}</span>
                </div>
                <h3 className="job-title">{job.title}</h3>
              </div>

              <div className="job-action">
                <a href={job.url} className="read-more-btn">READ MORE</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* You can add a form section here for job applications if needed */}
    </div>
  );
};

export default Career;