import React from "react";
import "./formed.css";
import NavigationBar from "../navigation/NavigationBar";
import Footer from "../footer/Footer";

const Career = () => {
  return (
    <div>
      <NavigationBar />

      {/* Hero Section */}
      <div className="career-hero">
        <img
          src="/images/formed.jpg"
          alt="Join Our Team"
          className="career-hero-img"
        />
        <div className="career-hero-overlay">
          <h1 className="career-hero-title">ENQUIRE US</h1>
          <p className="career-hero-subtitle">
            Build your career with F-TEC Skill Development
          </p>
        </div>
      </div>

      {/* Join Us Section */}
      <section className="career-join-section">
        <div className="career-join-card">
          <h2>STAY CONNECTED</h2>
          <p>
            Join our community and get the latest updates delivered straight to your inbox.
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
            Send Your Message on above Email
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
