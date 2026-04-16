import React from "react";
import "./Career.css";
import NavigationBar from "../navigation/NavigationBar";
import Footer from "../footer/Footer";

const Career = () => {
  return (
    <div>
      <NavigationBar />

      {/* Hero Section */}
      <div className="career-hero">
        <img
          src="/images/careers.jpg"
          alt="Join Our Team"
          className="career-hero-img"
        />
        <div className="career-hero-overlay">
          <h1 className="career-hero-title">Join Our Team</h1>
          <p className="career-hero-subtitle">
            Build your career with F-TEC Skill Development
          </p>
        </div>
      </div>

      {/* Join Us Section */}
      <section className="career-join-section">
        <div className="career-join-card">
          <h2>We’re Always Looking for Passionate People</h2>
          <p>
            Join F-TEC Skill Development and be part of India’s fastest-growing
            skill training ecosystem. Send us your updated resume — our team will
            reach out to you soon.
          </p>

          <div className="career-contact-info">
            <h3>📍 CONTACT US</h3>
            <p>
              <strong>F-TEC SKILL DEVELOPMENT</strong>
              <br />
              AB-6, Safdarjung Enclave, <br />
              New Delhi - 110029
            </p>
            <p>
              <strong>Call:</strong> 011-40517335, 41094328 <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:mailus@f-tec.net.in" className="career-email">
                mailus@f-tec.net.in
              </a>
            </p>
          </div>

          <a
            href="mailto:mailus@f-tec.net.in?subject=Resume%20Submission%20for%20F-TEC%20Careers"
            className="career-btn"
          >
            Send Your Resume on above Email
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
