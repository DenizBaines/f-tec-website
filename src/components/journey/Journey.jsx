import React, { useEffect, useState, useRef } from 'react';
import './Journey.css';
import NavigationBar from '../navigation/NavigationBar';
import Footer from '../footer/Footer';

const Journey = () => {
    const [activePhase, setActivePhase] = useState(0);
    const timelineRef = useRef(null);
    const phases = [
        {
            id: 1,
            period: "1995 - 2000",
            title: "Foundation",
            content: "Since Commencement Of The Organizations Journey On 16TH February, 1995, Within The First Six Years After Foundation, System Procedures & Core Values Were Inculcated. Initial Authentication Of Proof Of Concept (PoC) Was Successfully Established Through A Standalone Training Centre At Vikas Puri, New Delhi. During This Period, The Organisation Further Developed Five Training Centres Across Delhi To Provide Affordable Quality Training While Also Retaining Profitability Of Its Centres."
        },
        {
            id: 2,
            period: "2000 - 2007",
            title: "Expansion",
            content: "After Successful Implementation Of The PoC Model In Five Training Centres, F-TEC Initiated An Aggressive Expansion Campaign By Introducing “Social Franchise Model” Wherein First-Generation Entrepreneurs Were Invited As ‘Partners In Progress’ With F-TEC. This Unique Business Initiative Translated Into The F-TEC Network Multiplying Manifold Its Strength To 150 Training Centres Across India Especially In Jaipur, Chandigarh, Lucknow, Hyderabad, Ahmedabad, Kolkata & Mumbai. During This Growth Phase, F-TEC Evolved Into A ‘Self-Sustained Social Enterprise Model’ From A Training Institution In The Field Of Skill Development. Further Positive Utilization Of Revenue Generated To Create A Rural Development Model In The State Of Haryana For Rural Women, Youth & Elected Panchayat Members."
        },
        {
            id: 3,
            period: "2007 - 2014",
            title: "Transformation",
            content: "In This Phase, F-TEC Witnessed A Transformation From An IT Training Social Enterprise Model Into A Multi Skilling Enterprise Based On Emerging Market Requirements For Trained Professionals In New Sectors Like Retail, Banking & Finance. Keeping In Mind, Increased Employment Opportunities In New Sectors, F-TEC Conducted An Aspiration Study And Launched A New Product Portfolio Combining Both Industry Needs & Youth Aspirations. These New Programs Were Introduced In IT & ITES, Retail, Banking & Computerized Accounting."
        },
        {
            id: 4,
            period: "2014 Onwards",
            title: "National Integration",
            content: "As A Part Of The Emerging Skill Eco System, F-TEC Entered Into Partnership With NSDC (National Skill Development Cooperation) And Began Offering Programs Based On National Skill Qualification Framework (NSQF). During This Phase, F-TEC Ventured Into Different Skill Development Projects With NSDC, Ministries & State Governments. Presently, F-TEC Is Offering Skill Programs To Students From 9th Standard To UG Level As Well As Offering Bachelor In Vocational Studies (B.VOC)."
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
         <div>
        <div className="journey-container">
           <NavigationBar />
            {/* Hero Banner Section */}
            <div className="hero-section">
                     <img src="/images/journey.png" alt="Journey" className="hero-background" />
                     <div className="hero-overlay"></div>
                     <h1 className="hero-text">Our Journey</h1>
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
        <Footer />
         </div>
    );
};

export default Journey;