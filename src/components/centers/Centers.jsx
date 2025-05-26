// Centers.jsx
import React, { useState } from 'react';
import './Centers.css';
import NavigationBar from '../navigation/NavigationBar';
import Footer from '../footer/Footer';


const centersData = {
  "East Delhi": [
    {
      name: "Shahdara",
      address: "1576, Near Durga Bhawan, Navin Shahdara, Shahdara, Delhi-110032",
      phone: "9313947730",
      image: "images/center/shahdara.jpg",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.2193673961779!2d77.28312998862582!3d28.676519697129116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb7ff5ec0069%3A0x5dbacadee527596b!2sBest%20Computer%20and%20English%20Speaking%20institute%20in%20shahdara-F-TEC_Naveen_shahdara!5e0!3m2!1sen!2sin!4v1748218410283!5m2!1sen!2sin"
    },
    {
      name: "Vivek Vihar",
      address: "D-20, Basement, Vivek Vihar,\nOpposite Vivekananda College, Delhi-110095",
      phone: "8447474549",
      image: "images/center/vivek_vihar.jpg",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.791782904456!2d77.31203047519229!3d28.665952532562695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb0f95555555%3A0xb07babe27b57edfd!2sFTEC-Top%20Rated%20Best%20Computer%20Institute%20in%20Vivek%20vihar%20Delhi%20provides%20Excel%2CDigital%20marketing%20%2CPython%2CPowerBI%2CData%20Analytics!5e0!3m2!1sen!2sin!4v1747981673075!5m2!1sen!2sin" 
    },
    {
      name: "Krishna Nagar",
      address: "Lal Quarter, Opposite IDBI Bank,\nNear Capital Lab, Krishna Nagar, Delhi-110051",
      phone: "8447474549",
      image: "images/center/krishna_nagar.jpg",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.031851457012!2d77.27797667497153!3d28.658764948668978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd264f88c7bd%3A0x9be22b195cfe4225!2sF-TEC%20Best%20computer%20Institute%20near%20Gandhi%20nagar%20Geeta%20colony-Tally%20%7C%20Advance%20Excel%20%7C%20Data%20Analytics%20%7C%20Python%20%7C%20SQL%20%7C%20Powerbi!5e0!3m2!1sen!2sin!4v1748001636011!5m2!1sen!2sin"
    }
  ],

  "South Delhi": [
    {
      name: "Green Park",
      address: "C1/G, Green Park Extension, Opposite Indian Oil Building, Near metro station gate No. 3, Delhi-110016",
      phone: "9811290268",
      image: "images/center/green_park.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7006.85105603875!2d77.3016855935791!3d28.587008499999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26e078beb03%3A0x84a9246cd025c662!2sF-TEC%20Skill%20Development!5e0!3m2!1sen!2sin!4v1748218617563!5m2!1sen!2sin"
    },
    {
      name: "Khanpur",
      address: "39, 1st Floor LFA Building, Near PNB Khanpur Extension, Delhi-110062",
      phone: "9911905694",
      image: "images/center/khanpur.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.117172263313!2d77.31278947448948!3d28.593210875693732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3abf2fdb3fb%3A0x8dbbbd3d17e8ef0!2sF-TEC%20Top%20Rated%20Best%20Computer%20Institute!5e0!3m2!1sen!2sin!4v1684754798352!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.863435992047!2d77.2302206751517!3d28.51375618946508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1a29a43d621%3A0x603168f2ca8245ee!2sF-TEC%20%7C%7C%20New%20Computer%20Upskill%20Academy%20-%20Best%20Computer%20Institute%2C%20Best%20Computer%20Course%2C%20Tally%20prime%2C%20Python%2C%20Near%20Me%20Khanpur!5e0!3m2!1sen!2sin!4v1748218780804!5m2!1sen!2sin" 
    }
  ],

  "South West Delhi": [
    {
      name: "Kapeshera",
      address: "Rao Harpal Bhawan, 2nd Floor Near Shiv Mandir & DCB Bank, Opp Fun N Food Village, Old Delhi Road Kapashera, New Delhi-1100037",
      phone: "9811596040",
      image: "https://via.placeholder.com/400x200?text=Shahdara+Centre",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
    },
    {
      name: "Najafgarh",
      address: "1625-B / 3, 1st Floor, Thane Road, Opp. HP Petrol Pump, Najafgarh, Delhi-110043",
      phone: "9911905694",
      image: "https://via.placeholder.com/400x200?text=Vivek+Vihar",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.117172263313!2d77.31278947448948!3d28.593210875693732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3abf2fdb3fb%3A0x8dbbbd3d17e8ef0!2sF-TEC%20Top%20Rated%20Best%20Computer%20Institute!5e0!3m2!1sen!2sin!4v1684754798352!5m2!1sen!2sin"
    }
  ],

   "North Delhi": [
    {
      name: "Kamla Nagar",
      address: "A-11, 2nd Floor, G.T. Road, Above Sardar Di Hatti, Kamla Nagar, Delhi-110007",
      phone: "9811596040",
      image: "images/center/kamla_nagar.png",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3133192210817!2d77.19709667515751!3d28.68027268191187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd8fd01ed225%3A0x5d1ded8de8d231f4!2sF-TEC%20-%20Best%20Computer%20Institute%20in%20Kamla%20Nagar%20Delhi%20-%20Tally%20Training%20-%20Digital%20Marketing%20Training%20-%20Spoken%20English%20Institute!5e0!3m2!1sen!2sin!4v1748218999581!5m2!1sen!2sin" 
    },
  ],

  "Haryana": [
    {
      name: "Farrukh Nagar",
      address: "Near Serva Haryana Gramin Bank, Haryana Gurgaon ,Pataudi Road, Farrukh Nagar, Haryana-122506",
      phone: "8607404284",
      image: "https://via.placeholder.com/400x200?text=Shahdara+Centre",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
    },
    {
      name: "Pataudi",
      address: "1st Floor, Above Canara Bank, Near Shiv Murti, Haily Mandi Road, Pataudi, Haryana-122504",
      phone: "8950541492",
      image: "https://via.placeholder.com/400x200?text=Shahdara+Centre",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
    },
    {
      name: "Kharkhoda",
      address: "OM Info, office at BMS Tower, Opposite Bus stand, W.No-2, Shastri Colony, Kharkhoda, Sonepat, Haryana-131402",
      phone: "9315368658",
      image: "https://via.placeholder.com/400x200?text=Shahdara+Centre",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
    },
    {
      name: "Farrukh Nagar",
      address: "Near Serva Haryana Gramin Bank, Haryana Gurgaon ,Pataudi Road, Farrukh Nagar, Haryana-122506",
      phone: "8607404284",
      image: "https://via.placeholder.com/400x200?text=Shahdara+Centre",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
    },
    {
      name: "Farrukh Nagar",
      address: "Near Serva Haryana Gramin Bank, Haryana Gurgaon ,Pataudi Road, Farrukh Nagar, Haryana-122506",
      phone: "8607404284",
      image: "https://via.placeholder.com/400x200?text=Shahdara+Centre",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
    },
  ],
};

const Centers = () => {
  const [selectedRegion, setSelectedRegion] = useState("East Delhi");

  return (
    <div>
    <NavigationBar />
    <div className="centers-page">
      
      <h2 className="centers-title">OUR CENTRES</h2>
      <select
        className="region-select"
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
      >
        {Object.keys(centersData).map((region) => (
          <option key={region} value={region}>{region}</option>
        ))}
      </select>

      <div className="centers-grid">
        {centersData[selectedRegion].map((center, index) => (
          <div key={index} className="center-card">
            <img src={center.image} alt={center.name} className="center-img" />
            <div className="center-info">
              <h3>{center.name}</h3>
              <p>{center.address}</p>
              {center.phone && <p>Ph: {center.phone}</p>}
              <div className="map-embed">
                <iframe
                  src={center.mapUrl}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title='Map Showing Our Center Location'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Centers;
