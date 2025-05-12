import React, { useState, useEffect } from 'react';
import './Operations.css';

const Operations = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    interest: 'general' // Default selection
  });

  // Animation on scroll effect for elements
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsFormSubmitted(true);
    
    // Reset form after submission (optional)
    setTimeout(() => {
      setIsFormSubmitted(false);
      setFormData({
        name: '',
        contact: '',
        email: '',
        interest: 'general'
      });
    }, 5000);
  };

  const operationsModels = [
    {
      id: 1,
      title: 'Skill Development Centers',
      description: 'Our standardized skill development centers deliver high-quality training with industry-relevant curriculum, experienced trainers, and modern infrastructure to create work-ready professionals.',
      icon: '🏫'
    },
    {
      id: 2,
      title: 'Corporate Training',
      description: 'Customized training solutions for businesses focusing on upskilling employees with the latest technical and soft skills to meet evolving industry demands.',
      icon: '💼'
    },
    {
      id: 3,
      title: 'Government Projects',
      description: 'Partnering with government bodies to implement large-scale skill development initiatives aimed at increasing employability and entrepreneurship across diverse demographics.',
      icon: '🏛️'
    },
    {
      id: 4,
      title: 'Franchise Network',
      description: 'Our social franchising model enables entrepreneurs to establish and operate skill centers under our brand while adhering to quality standards and processes.',
      icon: '🔄'
    }
  ];

  const operationStats = [
    { id: 1, count: '150+', label: 'Training Centers' },
    { id: 2, count: '100+', label: 'First-Gen Entrepreneurs' },
    { id: 3, count: '25+', label: 'Years of Excellence' },
    { id: 4, count: '50,000+', label: 'Students Trained' }
  ];

  return (
    <div className="operations-container">
      {/* Hero Section */}
      <section className="operations-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="animate-on-scroll">OPERATIONAL EXCELLENCE</h1>
          <p className="animate-on-scroll">Think Skills.... Think F-TEC</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section animate-on-scroll">
        <div className="stats-container">
          {operationStats.map(stat => (
            <div key={stat.id} className="stat-item">
              <h2>{stat.count}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="operations-main">
        <div className="operations-intro animate-on-scroll">
          <h2>Our Operational Models</h2>
          <p>
            Successfully tested working model with both existing and first-generation entrepreneurs.
            F-TEC has assisted in the growth of more than 100 First Generation Entrepreneurs,
            offering diverse operational models tailored to different partnership needs.
          </p>
        </div>

        {/* Operational Models Grid */}
        <div className="operations-grid">
          {operationsModels.map(model => (
            <div key={model.id} className="operations-card animate-on-scroll">
              <div className="card-icon">{model.icon}</div>
              <h3>{model.title}</h3>
              <p>{model.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Section */}
      <section className="partnership-section">
        <div className="partnership-content animate-on-scroll">
          <h2>Partnership Opportunities</h2>
          <div className="partnership-types">
            <div className="partnership-type">
              <h3>First Generation Entrepreneur</h3>
              <p>
                Anyone having a passion for education & training could partner with F-TEC as a 
                Franchise for either Skill Development or Skill Academy based on a model concept 
                of social franchising where one could emerge as a leader for change in local areas.
              </p>
            </div>
            <div className="partnership-type">
              <h3>Entrepreneur</h3>
              <p>
                Seeking diversification into training/skilling sector/s, F-TEC offers 
                opportunities in the formal training & skilling space to become Master 
                Franchisee as also a regional channel partner.
              </p>
            </div>
            <div className="partnership-type">
              <h3>Infrastructure Partner</h3>
              <p>
                Any individual/group with an institutional infrastructure, adequate capital to invest 
                & to upgrade organizational set-up as per F-TEC parameters, can become a 
                training/skilling centre based on the franchisee principle & success sharing model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="enquiry-section">
        <div className="enquiry-container animate-on-scroll">
          <div className="form-container">
            <h2>Operation Enquiry</h2>
            {isFormSubmitted ? (
              <div className="success-message">
                <p>Thank you for your enquiry! We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Your Name (required)"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="Enter Your Contact Number (required)"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Your Email (required)"
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="franchise">Franchise Opportunity</option>
                    <option value="entrepreneur">Entrepreneur Partnership</option>
                    <option value="infrastructure">Infrastructure Partnership</option>
                  </select>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Operations;