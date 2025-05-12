import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: "Industrial Automation",
      shortDesc: "Comprehensive automation solutions for manufacturing facilities.",
      fullDesc: "Our industrial automation services provide end-to-end solutions to optimize your manufacturing processes. We integrate cutting-edge technologies to create smart factories that increase efficiency, reduce downtime, and maximize production quality.",
      icon: "automation-icon.svg",
      features: [
        "PLC Programming & Implementation",
        "SCADA System Integration",
        "HMI Design & Development",
        "Robotics & Automated Systems",
        "Motion Control Solutions",
        "Factory Floor Digitization"
      ],
      benefits: [
        "Increased operational efficiency",
        "Reduced manual errors",
        "Enhanced production quality",
        "Real-time monitoring capabilities",
        "Streamlined workflows"
      ],
      caseStudy: {
        title: "Automotive Component Manufacturer",
        description: "Implemented a fully automated production line that increased output by 35% while reducing quality issues by 40%."
      },
      image: "/images/industrial-automation.jpg"
    },
    {
      id: 2,
      title: "Process Control",
      shortDesc: "Advanced systems for precise control of industrial processes.",
      fullDesc: "Our process control solutions enable precise management of industrial processes across various sectors. We design and implement systems that maintain optimal operating parameters, ensuring consistent product quality and reduced waste.",
      icon: "process-control-icon.svg",
      features: [
        "Control Loop Design & Tuning",
        "Process Instrumentation",
        "Advanced Process Control",
        "Batch Process Management",
        "Distributed Control Systems",
        "Process Optimization"
      ],
      benefits: [
        "Enhanced product consistency",
        "Optimized resource utilization",
        "Reduced energy consumption",
        "Improved safety compliance",
        "Minimized process variability"
      ],
      caseStudy: {
        title: "Chemical Processing Plant",
        description: "Implemented precision control systems that reduced process variability by 60% and decreased energy usage by 25%."
      },
      image: "/images/process-control.jpg"
    },
    {
      id: 3,
      title: "IoT & IIoT Solutions",
      shortDesc: "Smart, connected industrial systems for the digital age.",
      fullDesc: "Our IoT and Industrial IoT solutions connect your equipment, processes, and personnel into a unified, intelligent network. We implement systems that provide real-time data collection, analytics, and actionable insights to drive continuous improvement.",
      icon: "iot-icon.svg",
      features: [
        "Industrial Sensor Networks",
        "Edge Computing Solutions",
        "Cloud Integration",
        "Real-time Analytics",
        "Predictive Maintenance",
        "Digital Twin Technology"
      ],
      benefits: [
        "Remote monitoring capabilities",
        "Predictive maintenance",
        "Data-driven decision making",
        "Reduced unplanned downtime",
        "Enhanced operational visibility"
      ],
      caseStudy: {
        title: "Manufacturing Facility",
        description: "Deployed an IIoT system that reduced maintenance costs by 30% and improved overall equipment effectiveness by 22%."
      },
      image: "/images/iot-solutions.jpg"
    },
    {
      id: 4,
      title: "Industry 4.0 Implementation",
      shortDesc: "Strategic digital transformation for manufacturing excellence.",
      fullDesc: "We guide organizations through their digital transformation journey with comprehensive Industry 4.0 implementation strategies. Our approach combines advanced technologies, process redesign, and change management to create smart, adaptive manufacturing environments.",
      icon: "industry4-icon.svg",
      features: [
        "Digital Transformation Roadmaps",
        "Smart Factory Design",
        "Cyber-Physical Systems",
        "Manufacturing Execution Systems",
        "Supply Chain Digitization",
        "Data Analytics & AI Integration"
      ],
      benefits: [
        "Increased operational agility",
        "Enhanced competitiveness",
        "Improved resource efficiency",
        "Greater production flexibility",
        "Accelerated innovation cycles"
      ],
      caseStudy: {
        title: "Electronics Manufacturer",
        description: "Comprehensive digital transformation that resulted in 40% reduced time-to-market and 25% production cost savings."
      },
      image: "/images/industry4-implementation.jpg"
    },
    {
      id: 5,
      title: "Energy Management",
      shortDesc: "Optimized energy utilization for sustainable manufacturing.",
      fullDesc: "Our energy management services help industrial facilities reduce consumption, optimize distribution, and transition to more sustainable sources. We implement monitoring and control systems that balance operational needs with environmental responsibility.",
      icon: "energy-icon.svg",
      features: [
        "Energy Auditing & Monitoring",
        "Power Quality Management",
        "Load Balancing Systems",
        "Renewable Energy Integration",
        "Energy-Efficient Process Design",
        "ISO 50001 Implementation"
      ],
      benefits: [
        "Reduced energy costs",
        "Smaller carbon footprint",
        "Compliance with regulations",
        "Enhanced sustainability profile",
        "Improved energy resilience"
      ],
      caseStudy: {
        title: "Food Processing Plant",
        description: "Implemented an integrated energy management system that reduced consumption by 32% and enabled certification to ISO 50001 standards."
      },
      image: "/images/energy-management.jpg"
    },
    {
      id: 6,
      title: "Consulting & Integration",
      shortDesc: "Expert guidance and seamless systems integration.",
      fullDesc: "Our consulting and integration services provide expert guidance through technical challenges and opportunities. We help bridge legacy systems with modern technologies, ensuring seamless operations while leveraging existing investments.",
      icon: "consulting-icon.svg",
      features: [
        "Technology Assessment",
        "Legacy System Integration",
        "Vendor Selection & Management",
        "Solution Architecture Design",
        "Project Management",
        "Training & Knowledge Transfer"
      ],
      benefits: [
        "Optimized technology investments",
        "Reduced implementation risks",
        "Aligned business & technology strategies",
        "Smooth technology transitions",
        "Enhanced team capabilities"
      ],
      caseStudy: {
        title: "Pharmaceutical Manufacturer",
        description: "Guided integration of legacy control systems with modern MES, preserving critical functionality while enabling new capabilities."
      },
      image: "/images/consulting-integration.jpg"
    }
  ];

  // Toggle service details
  const toggleService = (id) => {
    if (activeService === id) {
      setActiveService(null);
    } else {
      setActiveService(id);
      // Scroll to the detailed view after a short delay
      setTimeout(() => {
        document.getElementById(`service-detail-${id}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <div className="services-page">
      <div className="hero-section">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive industrial technology solutions to drive your business forward</p>
        </div>
      </div>

      <div className="services-overview container">
        <div className="services-intro">
          <h2>Driving Industrial Evolution</h2>
          <p>
            At F-Tec, we provide comprehensive industrial technology solutions designed to optimize
            your operations, improve efficiency, and accelerate digital transformation. Our team of
            experts works closely with you to identify your unique challenges and opportunities,
            delivering customized solutions that meet your specific needs.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map(service => (
            <div 
              key={service.id} 
              className={`service-card ${activeService === service.id ? 'active' : ''}`}
              onClick={() => toggleService(service.id)}
            >
              <div className="service-icon">
                <img src={`/images/${service.icon}`} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
              <div className="service-card-overlay">
                <span>Learn More</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeService && (
        <div className="service-detail-section" id={`service-detail-${activeService}`}>
          <div className="container">
            {servicesData.filter(service => service.id === activeService).map(service => (
              <div className="service-detail" key={`detail-${service.id}`}>
                <div className="service-detail-header">
                  <h2>{service.title}</h2>
                  <button className="close-btn" onClick={() => setActiveService(null)}>×</button>
                </div>
                
                <div className="service-detail-content">
                  <div className="service-detail-info">
                    <p className="service-description">{service.fullDesc}</p>
                    
                    <div className="service-features">
                      <h3>Key Capabilities</h3>
                      <ul>
                        {service.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="service-benefits">
                      <h3>Benefits</h3>
                      <ul>
                        {service.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="service-case-study">
                      <h3>Success Story</h3>
                      <h4>{service.caseStudy.title}</h4>
                      <p>{service.caseStudy.description}</p>
                    </div>
                    
                    <div className="service-action">
                      <a href="/contact" className="contact-btn">Discuss Your Project</a>
                      <a href={`/services/${service.id}`} className="learn-more-btn">Learn More</a>
                    </div>
                  </div>
                  
                  <div className="service-detail-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="service-approach container">
        <h2>Our Approach</h2>
        <div className="approach-steps">
          <div className="approach-step">
            <div className="step-number">1</div>
            <h3>Assessment</h3>
            <p>We conduct a thorough analysis of your current systems, processes, and challenges to identify opportunities for improvement.</p>
          </div>
          
          <div className="approach-step">
            <div className="step-number">2</div>
            <h3>Design</h3>
            <p>Our experts design customized solutions that address your specific needs and align with your business objectives.</p>
          </div>
          
          <div className="approach-step">
            <div className="step-number">3</div>
            <h3>Implementation</h3>
            <p>We deploy solutions with minimal disruption to your operations, ensuring smooth integration with existing systems.</p>
          </div>
          
          <div className="approach-step">
            <div className="step-number">4</div>
            <h3>Support</h3>
            <p>Our team provides ongoing support, maintenance, and optimization to ensure your systems continue to deliver value.</p>
          </div>
        </div>
      </div>
      
      <div className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Operations?</h2>
          <p>Contact our team to discuss how our services can help your business achieve its goals.</p>
          <div className="cta-buttons">
            <a href="/contact" className="primary-btn">Contact Us</a>
            <a href="/case-studies" className="secondary-btn">View Case Studies</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;