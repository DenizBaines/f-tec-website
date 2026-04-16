import React, { useState } from 'react';
import './Form.css';
import NavigationBar from '../navigation/NavigationBar';
import Footer from '../footer/Footer';



function FormToSheet() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    message: '',
  });


/* https://script.google.com/macros/library/d/1LyQMSfO_moUX6_AZh2qchtUCUfLAX79hMsctOcbrLJefJYijZZNb_DMH/2 */



  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [errors, setErrors] = useState({});

  // Google Apps Script URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyLqKmHutYuG29yILSzPoHYA2-2s0bRmF1zcN70bVksBjKI8JXopN9mmG62KCcD1oeMcw/exec";

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    setSubmitStatus({
      type: 'error',
      message: 'Please fix the errors below and try again.'
    });
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus({ type: '', message: '' });

  try {
    const formPayload = new URLSearchParams({
      Name: formData.name,
      Email: formData.email,
      Phone: formData.phone,
      Course: formData.course,
      Experience: formData.experience,
      Message: formData.message,
    });

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formPayload.toString()
    });

    await response.text();

    if (response.ok) {
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your information has been submitted successfully.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        experience: '',
        message: ''
      });
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    setSubmitStatus({
      type: 'error',
      message: 'Sorry, there was an error submitting your information. Please try again.'
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div>
         <NavigationBar />
    <div className="form-container-ftec">
      <div className="form-wrapper-ftec">
        <div className="form-header-ftec">
          <h1 className="form-title-ftec">Stay Connected</h1>
          <p className="form-subtitle-ftec">
            Join our community and get the latest updates delivered straight to your inbox.
          </p>
        </div>

        <div className="form-content-ftec">
          <div className="form-info-ftec">
            <div className="info-card-ftec">
              <div className="info-icon-ftec">🚀</div>
              <h3>Quick & Easy</h3>
              <p>Fill the form to know more details about the required course</p>
            </div>
            
            <div className="info-card-ftec">
              <div className="info-icon-ftec">🔒</div>
              <h3>Secure</h3>
              <p>Your data is protected and will never be shared</p>
            </div>
            
            <div className="info-card-ftec">
              <div className="info-icon-ftec">📧</div>
              <h3>Stay Updated</h3>
              <p>Get notifications about new courses and updates</p>
            </div>
          </div>

          <form className="modern-form-ftec" onSubmit={handleSubmit}>
            {submitStatus.message && (
              <div className={`form-status-ftec ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            <div className="form-group-ftec">
              <label htmlFor="name" className="form-label-ftec">
                Full Name 
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`form-input-ftec ${errors.name ? 'error' : ''}`}
                placeholder="Enter your full name"
              />
              {errors.name && <span className="form-error-ftec">{errors.name}</span>}
            </div>

            <div className="form-group-ftec">
              <label htmlFor="email" className="form-label-ftec">
                Email Address 
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input-ftec ${errors.email ? 'error' : ''}`}
                placeholder="your.email@example.com"
              />
              {errors.email && <span className="form-error-ftec">{errors.email}</span>}
            </div>

           
           <div className="form-group-ftec">
  <label htmlFor="phone" className="form-label-ftec">Phone Number</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={handleInputChange}
    className="form-input-ftec"
    placeholder="Enter your phone number"
  />
</div>

<div className="form-group-ftec">
  <label htmlFor="course" className="form-label-ftec">Course</label>
  <input
    type="text"
    id="course"
    name="course"
    value={formData.course}
    onChange={handleInputChange}
    className="form-input-ftec"
    placeholder="Which course are you interested in?"
  />
</div>

<div className="form-group-ftec">
  <label htmlFor="experience" className="form-label-ftec">Experience</label>
  <input
    type="text"
    id="experience"
    name="experience"
    value={formData.experience}
    onChange={handleInputChange}
    className="form-input-ftec"
    placeholder="Your work or academic experience"
  />
</div>

<div className="form-group-ftec">
  <label htmlFor="message" className="form-label-ftec">Message</label>
  <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleInputChange}
    className="form-input-ftec"
    placeholder="Write your message or questions"
  />
</div>



            <button
              type="submit"
              className="form-submit-ftec"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-ftec"></span>
                  Submitting...
                </>
              ) : (
                'Submit Now'
              )}
            </button>

            <p className="form-note-ftec">
              * Required fields. We respect your privacy and follow GDPR guidelines.
            </p>
          </form>
        </div>
      </div>
    </div>

     <Footer />
    </div>
  );
}

export default FormToSheet;