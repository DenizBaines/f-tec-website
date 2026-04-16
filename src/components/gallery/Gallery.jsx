import React from 'react';
import NavigationBar from '../navigation/NavigationBar';
import Footer from '../footer/Footer';

const Gallery = () => {
  // Mock data for the gallery items. I've added a 'description' field for text 
  // and an 'imageUrl' field for the image within the card.
  const galleryItems = [
    {
      id: 1,
      title: "Silver Jubilee Awards",
      
      description: `
      On 16th February 2020, F-TEC Skill Development celebrated its Silver 
      Jubilee at The Park Hotel, New Delhi. The event was graced by Shri Parvesh 
      Sahib Singh (MP), Padmashri Shri Ashok Bhagat, Prof. Abhay Karandikar 
      (Director, IIT Kanpur), and other distinguished guests, academicians, 
      and industry representatives. The celebration featured skill competitions, 
      award recognitions for top-performing centers, and inspiring experiences 
      shared by center heads. The ceremony also included the prestigious 
      F-TEC Skill Star Awards, honoring outstanding skilled youth from across centers.
      `,
      
      imageUrl: "/images/gallery/1.jpg",
      color: "blue"
    },
    {
      id: 2,
      title: "Sanyojan 12",
      
      description: `
      The Youth conclave - Sanyojan 12 was inaugurated with the lighting of the 
      lamp by Chief Guest Hon'ble Member of Parliament Sh. Parvesh Sahib Singh. 
      The Inaugural Session opened up with welcome note presented by Shri Praveen 
      Arya, Chairman F-TEC Skill Development who shared the brief overview of F-TEC 
      journey of 23 years in the area of training and skill development, achieved 
      direct community reach of more than 100,000 on different issues.
      `,
      
      imageUrl: "/images/gallery/2.jpg",
      color: "red"
    },
    {
      id: 3,
      title: "She The Change",
      
      description: `
      Lighting of Lamp to inaugurate Sanyojan 10 under the program titled as 
      “SHE THE CHANGE” at Talkatora Stadium on 25th June, 2013. This event of 
      youth conclave was organised to highlight Women Empowerment and recognise 
      some of the women leaders, based on which a booklet was released, carrying 
      their success stories. The event was jointly inaugurated by Members of 
      Parliament, Shri Prakash Javadekar and Ms. Renuka Chowdhury.
      `,
      
      imageUrl: "/images/gallery/3.jpg",
      color: "teal"
    },
    {
      id: 4,
      title: "Rediscovering India",
      
      description: `
      Shri Rajnath Singh, former Chief Minister of Uttar Pradesh & the present 
      Home Minister, inaugurated the youth conclave at the Talkatora Stadium on 
      8th March, 2005 on the theme of Rediscovering India. The conclave was 
      organised to sensitise youth by spreading awareness on the rich Indian 
      heritage especially in the fields of Culture, Science & Mathematics.
      `,
      
      imageUrl: "/images/gallery/4.jpg",
      color: "green"
    },
    {
        id: 5,
        title: "Sanyojan 2",
        
        description: `
        Shri Shivraj Singh Chouhan, Member of Parliament & current Chief Minister 
        of Madhya Pradesh was the Chief guest at the valedictory ceremony of 
        Sanyojan 2, held at Talkatora stadium dated 8th March, 2005. This youth 
        conclave was organised based on vision 2020 and the role of youth in nation 
        building. Shri Shivraj Singh Chouhan highlighted the critical role to be 
        played by the youth when it comes to any transformational shift in any 
        society or nation.
        `,
       
        imageUrl: "/images/gallery/5.jpg",
        color: "purple"
      },
      
  ];

  const styles = `
    /* Gallery Page Styles */
    .gallery-container {
        width: 100%;
        margin: 0 auto;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    /* Hero Banner */
    .gallery-hero-banner {
        width: 100%;
        height: 35vh; /* Reduced height for a less dominant banner than the service page */
        overflow: hidden;
        position: relative;
        margin-bottom: 20px;
    }

    .gallery-hero-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    /* Main Content */
    .gallery-content {
        padding: 20px 40px; /* Added horizontal padding */
        max-width: 1200px; /* Set a max width for desktop content */
        margin: 0 auto;
    }

    .gallery-title {
        text-align: center;
        font-size: 2.8rem;
        font-weight: 700; /* Bolder title for impact */
        color: #002D62; /* Using the primary Navy color */
        margin-bottom: 10px;
        letter-spacing: 2px;
    }

    /* Introduction Text */
    .gallery-intro {
        text-align: center;
        max-width: 800px;
        margin: 10px auto 50px auto; /* More space below intro */
        font-size: 1.1rem;
        line-height: 1.6;
        color: #444;
    }

    /* Gallery Cards Grid */
    .gallery-grid {
        display: grid;
        /* Use a 3-column grid for better visual density */
        grid-template-columns: repeat(3, 1fr); 
        gap: 30px;
        margin-top: 20px;
    }

    .gallery-card {
        border-radius: 8px; /* Slightly more rounded corners */
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, box-shadow 0.3s;
        overflow: hidden; /* Important for containing image border-radius */
        display: flex;
        flex-direction: column;
        background-color: white; /* Ensure white background */
        border: 1px solid #eee; /* Subtle border */
    }

    .gallery-card:hover {
        transform: translateY(-8px); /* More noticeable lift on hover */
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }

    /* Image Wrapper */
    .gallery-image-wrapper {
        width: 100%;
        /* Maintain aspect ratio for the image container (e.g., 3:2) */
        padding-bottom: 6%; 
        position: relative;
        overflow: hidden;
        margin-bottom: 15px;
    }

    .gallery-card-image {
        position: fix;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .gallery-card:hover .gallery-card-image {
        transform: scale(1.05); /* Zoom effect on image hover */
    }

    /* Card Title */
    .gallery-card-title {
        font-size: 1.25rem;
        font-weight: 600;
        padding: 15px 20px 0 20px;
        text-align: left;
        color: #1a1a1a;
    }

    /* Card Description */
    .gallery-card-description {
        font-size: 0.95rem;
        line-height: 1.5;
        color: #555;
        padding: 0 20px 20px 20px;
        flex-grow: 1;
        text-align: justify;
    }

    /* Card Color Variations (Border Top Accent) */
    .gallery-card.blue { border-top: 5px solid #4b9cd3; }
    .gallery-card.red { border-top: 5px solid #CC0000; }
    .gallery-card.teal { border-top: 5px solid #20b2aa; }
    .gallery-card.green { border-top: 5px solid #00b894; }
    .gallery-card.purple { border-top: 5px solid #9933FF; }
    .gallery-card.gold { border-top: 5px solid #FFC300; }

    /* Responsive Design */
    @media (max-width: 1200px) {
        .gallery-grid {
            /* Switch to 2 columns on mid-sized screens */
            grid-template-columns: repeat(2, 1fr); 
        }
    }

    @media (max-width: 768px) {
        .gallery-content {
            padding: 20px;
        }
        
        .gallery-grid {
            /* Switch to 1 column on mobile screens */
            grid-template-columns: 1fr;
            gap: 20px;
        }
        
        .gallery-hero-banner {
            height: 25vh;
        }
        
        .gallery-title {
            font-size: 2rem;
        }
        
        .gallery-card-title {
            font-size: 1.1rem;
        }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <NavigationBar />
      <div className="gallery-container">
        {/* <NavigationBar /> */} 
        
        {/* Hero Banner - Using a placeholder image for demonstration */}
        <div className="gallery-hero-banner">
          <img 
            src="/images/gallery/gallery-top.jpg" 
            alt="Gallery Banner"
            className="gallery-hero-image"
          />
        </div>

        {/* Main Content */}
        <div className="gallery-content">
          <h1 className="gallery-title">THE EVENT GALLERY</h1>
          
          <p className="gallery-intro">
            Since 1995, the F-TEC journey has been an evolving story of a social 
            enterprise model with many achievements & milestones as a training
            company.
          </p>
          
          {/* Gallery Grid */}
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className={`gallery-card ${item.color}`}
              >
                <h2 className="gallery-card-title">{item.title}</h2>
                
                {/* Image Section */}
                <div className="gallery-image-wrapper">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="gallery-card-image" 
                    // Fallback for image loading error
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found"; }}
                  />
                </div>

                {/* Description/Text Section */}
                <p className="gallery-card-description">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* <Footer /> */}
        <Footer />
      </div>
    </>
  );
};

export default Gallery;