import React, { useState } from "react";
import "./news.css";
import NavigationBar from "../navigation/NavigationBar";
import Footer from "../footer/Footer";

const News = () => {
  const [newsItems] = useState([
    {
      id: 1,
      image: "/images/news/1.jpg",
      title: "The SKOCH Award 2022",
      description: `
        Proud to announce an industry recognition & acknowledgment of 
        winning the prestigious “SKOCH Award” as also find place in the 
        “Order of Merit” for outstanding work in “Skill Development for Women” 
        through our unique initiative – “Mahila Jyoti Yojana”. 
        This innovative scheme was first launched in the year 2000, wherein female candidates are 
        being trained for improved employability as also contribute to an overall 
        Skilled Workforce.
        

        Over 1 Lakh female candidates have already been trained 
        without government support since the inception of this program, reflecting 
        on our continued commitment towards Women’s Empowerment. On behalf of 
        F-TEC India, Chairman, Shri. Praveen Arya received this award on Saturday, 
        11TH January 2020, at an event at India Habitat Centre, Delhi. 
        
        We acknowledge & sincerely appreciate the contribution of all our Business Associates, 
        Team Members & Female Candidates who have been involved in trainings under 
        MJY over the past 2 decades.
      `,
      date: "February 17, 2022",
      category: "Award",
    },
    {
      id: 2,
      image: "/images/news/2.jpg",
      title: "New Age Technologies and Its impact on Economy & Future Jobs",
      description: `
      On the occasion of its Silver Jubilee on 16th February 2020, F-TEC launched an annual initiative, “Power to Skills”, to strengthen the Skill India Mission. Over 25 years, F-TEC has evolved from an IT-ITES training organization (starting with MS-DOS in 1995) to a multi-skilling institution shaping India’s workforce for the 4th Industrial Revolution.
      The Power to Skills series aims to explore the impact of new-age technologies like AI, VR, Big Data, and Cloud Computing on the job market, and how training organizations can prepare youth with future-ready skills. The first edition, Power to Skills 1.0, brings together experts from industry, academia, and policy to discuss the roadmap for building a skilled and adaptive workforce for India’s growth story.
      `, 
      date: "February 6, 2020",
      category: "News",
    },
    {
      id: 3,
      image: "/images/news/3.jpg",
      title: "Skilling for Livelihoods : Youth Conclave",
      description: `
      Sanyojan-12 was part of a series of Youth Conclaves organized by Foresight Society and F-TEC Skill Development. 
      The initiative aimed to promote awareness and counseling among youth about skilling programs and the Skill India Mission. 
      The event, held on July 26th, 2018, at Siri Fort Auditorium, New Delhi, focused on empowering young individuals through 
      meaningful engagement and opportunities in skill-based careers.

      The theme of the conclave, “Skilling for Livelihoods,” revolved around four key objectives — 
      Counseling through Skill Discourse, F-TEC Job Connect, Skill Exhibition, 
      and Entrepreneurship with MUDRA Loan — all designed to guide and inspire youth toward sustainable 
      and skilled livelihoods.
      `,
      date: "September 19, 2018",
      category: "Summit",
    },
    {
      id: 4,
      image: "/images/news/4.jpg",
      title: "Skillathon India 2016",
      description: `
        To raise awareness about the importance of investing in youth skills development, 
        the United Nations General Assembly decided to celebrate 15th July as World Youth Skills Day (WYSD). 
        World Youth Skills Day (WYSD) is in line with the upcoming Sustainable Development Goals (SDGs) for 2030. 
        In this context, the World Youth Skills Day 2016 is a significant step in reinforcing the commitment of Government of India 
        and Ministry of Skill Development and Entrepreneurship (MSDE) to Skilling India initiative. 
        This is also very important to sensitise the youth on various initiatives like PMKVY2.0, 
        Pradhan Mantri Kaushal Kendra (PMKK) and India Skills Competition etc. SKILLATHON 2016 was organised by 
        partners of NSDC throughout Delhi and in other parts of India, celebrating World Youth Skills Day 2016.  
        Over whelming responses were received for the activities executed by F-TEC Skill Development, on the SKILLATHON-World Youth Skill Day 
        in coordination with NSDC.
      `,
      date: "June 24, 2018",
      category: "Summit",
    },
    {
      id: 5,
      image: "/images/news/5.jpg",
      title: "Kaushal Mela",
      description: `
      Kaushal Mela, organized on 14th January 2018 at Guru Ram Rai Inter College, Sahaspur, Dehradun, 
      marked the grand conclusion of the 15-day “Kaushal Pakhwara” campaign. The event witnessed participation 
      from over 700 rural youths, who attended sessions on the Skill India Mission, PMKK, and other skilling opportunities. 
      Around 300 candidates enrolled in various programs, with many expressing interest in further guidance.
      
      The event also included interactions with community leaders to raise awareness about PMKK initiatives and 
      concluded with an award and certificate ceremony for winners of the Skill Competition. The Chief Guest, 
      Shri Sahdev Singh Pundir (MLA), appreciated PMKK’s efforts toward empowering youth through skill development.
      `, 
      date: "June 24, 2018",
      category: "Summit",
    },
    {
      id: 6,
      image: "/images/news/6.jpg",
      title: "Womens Day Celebration",
      description: `
        F-TEC has been actively promoting Gender Equality since its inception. 
        On International Women’s Day (8th March 2018), F-TEC training centres 
        across various states organized activities celebrating womanhood and 
        spreading awareness. Events included youth marches, self-defence training 
        sessions (in collaboration with Delhi Police), and quiz and debate competitions. 
        In Delhi alone, around 2,000 volunteers from 25 centres formed a human chain to 
        support the cause of gender equality.
      `,
      date: "June 24, 2018",
      category: "Summit",
    },
    {
      id: 7,
      image: "/images/news/7.jpg",
      title: "Water Conservation Awareness",
      description: ` 
      F-TEC Skill Development carried out the exercise of Water Conservation 
      Awareness in Kalkaji on Sunday, 12th of July under the F-TEC Green banner. 
      The event started at 6 a.m. from the Kajkaji Training Centre. The awareness 
      program was a joint program which constituted students of the F-TEC Kaljaji 
      centre who volunteered for the program & Volunteers from the Foresight Society. 
      The program is the part of Foresight Initiative through its Authorized Training Centres 
      of F-TEC Skill Development throughout Northern India under the banner F-TEC Green.    
      `,
      date: "May 23, 2018",
      category: "Summit",
    },
    {
      id: 8,
      image: "/images/news/8.jpg",
      title: "F-TEC Skill Development organized Sanyojan 2012",
      description: `
      On March 26th, F-TEC Skill Development, in collaboration with Fair Trade Forum – India, 
      organized ‘Sanyojan-9’, a youth conclave themed “Vision 2020: Fair Trade & Social Enterprises” 
      highlighting the role of social enterprises in skill development. The event began with blessings 
      from Sri Sri Ravi Shankar Ji, humanitarian and founder of The Art of Living Foundation. 
      It was formally inaugurated by Sh. A. R. Kohli, Former Governor of Mizoram, and featured panel discussions, 
      thought leadership sessions, and an award ceremony celebrating contributions to the skill development ecosystem.
       `,
      date: "May 23, 2018",
      category: "Summit",
    },
  ]);

  const [selectedNews, setSelectedNews] = useState(null);

  const openModal = (item) => setSelectedNews(item);
  const closeModal = () => setSelectedNews(null);

  return (
    <div className="news-container">
    <NavigationBar />
      {/* Hero Section */}
      <div className="news-hero-section">
        <div className="news-hero-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&h=600&fit=crop"
          alt="FTEC News Header"
          className="news-hero-image"
        />
        <div className="news-hero-content">
          <h1 className="news-hero-title">Latest News & Updates</h1>
          <p className="news-hero-subtitle">
            Stay informed about FTEC's innovations and achievements
          </p>
        </div>
      </div>

      {/* News Grid */}
      <div className="news-grid">
        {newsItems.map((item) => (
          <article key={item.id} className="news-card">
            <div className="news-image-wrapper">
              <img src={item.image} alt={item.title} className="news-image" />
              <span className="news-category">{item.category}</span>
            </div>
            <div className="news-content">
              <div className="news-date">{item.date}</div>
              <h2 className="news-title">{item.title}</h2>
              <p className="news-description">
                {item.description.substring(0, 100)}...
              </p>
              <button
                className="news-read-more-btn"
                onClick={() => openModal(item)}
              >
                Read More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selectedNews && (
        <div className="news-modal-overlay" onClick={closeModal}>
          <div className="news-modal" onClick={(e) => e.stopPropagation()}>
            <button className="news-modal-close" onClick={closeModal}>
              ✕
            </button>
            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              className="news-modal-image"
            />
            <div className="news-modal-content">
              <h2>{selectedNews.title}</h2>
              <p className="news-modal-date">{selectedNews.date}</p>
              <p>{selectedNews.description}</p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default News;
