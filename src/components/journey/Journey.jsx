import React, { useEffect, useState, useRef } from 'react';
import './Journey.css';

const Journey = () => {
    const [activePhase, setActivePhase] = useState(0);
    const timelineRef = useRef(null);
    const phases = [
        {
            id: 1,
            period: "1995 - 2000",
            title: "Foundation",
            content: "Since commencement of the organizations journey on 16TH February, 1995, within the first six years after foundation, system procedures & core values were inculcated. Initial authentication of Proof of Concept (PoC) was successfully established through a standalone training centre at Vikas Puri, New Delhi. During this period, the organisation further developed five training centres across Delhi to provide affordable quality training while also retaining profitability of its centres."
        },
        {
            id: 2,
            period: "2000 - 2007",
            title: "Expansion",
            content: "After successful implementation of the PoC model in five training centres, F-TEC initiated an aggressive expansion campaign by introducing 'Social Franchise Model' wherein first-generation entrepreneurs were invited as 'Partners in Progress' with F-TEC. This unique business initiative translated into the F-TEC network multiplying manifold its strength to 150 training centres across India especially in Jaipur, Chandigarh, Lucknow, Hyderabad, Ahmedabad, Kolkata & Mumbai. During this growth phase, F-TEC evolved into a 'Self-Sustained Social Enterprise Model' from a training institution in the field of skill development. Further positive utilization of revenue generated to create a rural development model in the state of Haryana for rural women, youth & elected Panchayat members."
        },
        {
            id: 3,
            period: "2007 - 2014",
            title: "Transformation",
            content: "In this phase, F-TEC witnessed a transformation from an IT training social enterprise model into a multi skilling enterprise based on emerging market requirements for trained professionals in new sectors like retail, banking & finance. Keeping in mind, increased employment opportunities in new sectors, F-TEC conducted an aspiration study and launched a new product portfolio combining both industry needs & youth aspirations. These new programs were introduced in IT & ITES, retail, banking & computerized accounting."
        },
        {
            id: 4,
            period: "2014 Onwards",
            title: "National Integration",
            content: "As a part of the emerging skill eco system, F-TEC entered into partnership with NSDC (National Skill Development Cooperation) and began offering programs based on National Skill Qualification Framework (NSQF). During this phase, F-TEC ventured into different skill development projects with NSDC, Ministries & State Governments. Presently, F-TEC is offering skill programs to students from 9th Standard to UG level as well as offering Bachelor in Vocational Studies (B.VOC)."
        }
    ];

    // Handle scroll events to highlight active phase
    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;
            
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            timelineItems.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                const elemTop = rect.top + window.scrollY;
                const elemBottom = elemTop + rect.height;
                
                if (scrollPosition >= elemTop && scrollPosition <= elemBottom) {
                    setActivePhase(index);
                }
            });
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize on mount
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="journey-container">
            {/* Hero Banner Section */}
            <div className="hero-section">
                <div className="hero-image">
                    <div className="overlay">
                        <img src="/images/journey-path.jpg" alt="Journey" />
                    </div>
                </div>
                <h1>OUR JOURNEY</h1>
                <div className="divider">
                    <span className="diamond"></span>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="timeline-container" ref={timelineRef}>
                <div className="timeline-line"></div>
                
                {phases.map((phase, index) => (
                    <div 
                        key={phase.id} 
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${activePhase === index ? 'active' : ''}`}
                    >
                        <div className="timeline-marker">
                            <div className="marker-circle"></div>
                        </div>
                        
                        <div className="timeline-content">
                            <h3>{phase.period}</h3>
                            <h2>{phase.title}</h2>
                            <p>{phase.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Journey;