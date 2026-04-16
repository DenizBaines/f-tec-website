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
      address: "Rao Harpal Bhawan, 2nd Floor Near Shiv Mandir & DCB Bank, Opp. Fun N Food Village, Old Delhi Road Kapashera, Delhi-1100037",
      phone: "9811596040",
      image: "images/center/south-west-delhi/swd1.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14021.969453312928!2d77.083858!3d28.524917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1be6ca02808d%3A0x7a083410ac0f8d12!2sF-TEC%20Computer%20Institute%20Kapashera!5e0!3m2!1sen!2sus!4v1761885407623!5m2!1sen!2sus" 
    },
    {
      name: "Najafgarh",
      address: "1625-B / 3, 1st Floor, Thane Road, Opp. HP Petrol Pump, Najafgarh, Delhi-110043",
      phone: "9911905694",
      image: "images/center/south-west-delhi/swd2.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.117172263313!2d77.31278947448948!3d28.593210875693732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3abf2fdb3fb%3A0x8dbbbd3d17e8ef0!2sF-TEC%20Top%20Rated%20Best%20Computer%20Institute!5e0!3m2!1sen!2sin!4v1684754798352!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.459673711937!2d76.979782!3d28.611327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0fdb385b8617%3A0x72c0e7fc2701871!2sF-TEC%20%7C%7C%20New%20Computer%20Upskill%20Academy%20-%20Best%20Computer%20Institute%20In%20Najafgarh%2C%20Python%20Near%20Me%20Najafgarh!5e0!3m2!1sen!2sus!4v1761885449663!5m2!1sen!2sus" 
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
    }
  ],

   "Rajasthan": [
    {
      name: "Jaipur (PMKK)",
      address: "Infront of Telephone Exchange, Paota, Jaipur, Rajasthan-303106",
      phone: "9928923154",
      image: "images/center/rajasthan-pic/rajasthan-pic1.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.678907947914!2d76.07042107518853!3d27.57247397626016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d1591ab98ed3f%3A0x26bfb1fa9c841dac!2sPradhan%20Mantri%20Kaushal%20Kendra!5e0!3m2!1sen!2sin!4v1761810040979!5m2!1sen!2sin" 
    },

    {
      name: "Jodhpur (PMKK)",
      address: "Jassi Tower, Plot No.3, Kh No.22, Village Nandri, On Main Banar Road, Jodhpur, Rajasthan-342015",
      phone: "8078650244",
      image: "images/center/rajasthan-pic/rajasthan-pic2.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28610.934070867963!2d73.0989!3d26.314621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941f303960d7099%3A0x6a4c4c4617cecd0e!2sJassi%20Tower!5e0!3m2!1sen!2sin!4v1761810457650!5m2!1sen!2sin"
    },

    {
      name: "Sirohi (PMKK)",
      address: "Ajmer Tower, Abu Road, Akra Bhatta Mount Abu Road, Sirohi, Rajasthan-307026",
      phone: "9807949526",
      image: "images/center/rajasthan-pic/rajasthan-pic3.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14521.65045275302!2d72.793228!3d24.505801!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d2992a4f885c7%3A0x9a2249ae76a4c343!2z4KSq4KWN4KSw4KSn4KS-4KSo4KSu4KSC4KSk4KWN4KSw4KWAIOCkleCljOCktuCksiDgpJXgpYfgpKjgpY3gpKbgpY3gpLAsIOCkhuCkrOClguCksOCli-CkoSjgpLjgpL_gpLDgpYvgpLngpYAp!5e0!3m2!1sen!2sin!4v1761810831531!5m2!1sen!2sin"
    },

    {
      name: "Barmer (PMKVY)",
      address: "Jivraj Mali, Ward No.3, Behind Agarwal Colony, Balotra, Barmer, Rajasthan-344022",
      phone: "8209701861",
      image: "images/center/rajasthan-pic/rajasthan-pic4.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14365.086302710295!2d72.236718!3d25.827595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3943e8d4ea502439%3A0x92a7c96dd7cf18cf!2sAgarwal%20Colony%2C%20Balotra%2C%20Rajasthan%20344022!5e0!3m2!1sen!2sin!4v1761812495697!5m2!1sen!2sin"
    },

  ],

  "Telangana": [
    {
      name: "Nagarkurnool",
      address: "15-167/20/A, Post Office Achampet, District Nagarkurnool, Telangana-509375",
      phone: "8367605835",
      image: "images/center/telangana/telangana-pic1.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244907.08602747435!2d78.3086906286643!3d16.4414146008983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca7d391b8e32c7%3A0x1093bb2d6dab8c45!2sAP%20Sangameshwara%20grameena%20Bank!5e0!3m2!1sen!2sin!4v1761813712062!5m2!1sen!2sin" 
    }
  ],
   
  "Uttarakhand": [
    {
      name: "Dehradun (PMKK)",
      address: "Khasra No. 957, Central Hope Town, Meelu Complex, Chakrata Road, Vikasnagar, Dehradun, Uttrakhand-248197",
      phone: "9634943793",
      image: "images/center/uttarakhand/utar1.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.8588267237947!2d77.85155378103528!3d30.354961809711558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929eef6abbb5b%3A0xac9960043292baee!2sChakrata%20Rd%2C%20Central%20Hope%20Town%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1761825842382!5m2!1sen!2sin" 
    },
    {
      name: "Haridwar (PMKK)",
      address: "Khasra No.49, Raipur Tehsil Bhagwanpur, Roorkee, Haridwar, Uttrakhand-247661",
      phone: "7310561760",
      image: "images/center/uttarakhand/utar2.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7086142.480024827!2d77.881017!3d29.863394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb39d3541f59b%3A0x70e28da8a5905a75!2sPMKVY!5e0!3m2!1sen!2sin!4v1761825967585!5m2!1sen!2sin"
    },
    {
      name: "Uttarkashi (PMKK)",
      address: "Gangotri Highway, Matli, Near Petrol Pump, Uttarkashi, Uttrakhand-249193",
      phone: "8755965715",
      image: "images/center/uttarakhand/utar3.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13717.075228488471!2d78.373059!3d30.73895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390894ad25d470a5%3A0x7685779598d13814!2sPMKK%20Uttarkashi!5e0!3m2!1sen!2sin!4v1761826164201!5m2!1sen!2sin" 
    },
    {
      name: "Chamoli (PMKK)",
      address: "Village Paduli, Post Karnprayag, Chamoli, Uttrakhand-246444",
      phone: "9997561418",
      image: "images/center/uttarakhand/utar4.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3529280.872942995!2d79.238563!3d30.249525999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909da8c0d33e299%3A0xc8c8ae9d312208cb!2sPRADHAN%20MANTRI%20KAUSHAL%20KENDRA%20CHAMOLI!5e0!3m2!1sen!2sin!4v1761826840819!5m2!1sen!2sin"
    },
    {
      name: "Rudraprayag (PMKK)",
      address: "Harsh Vihar, Village Gabni, Chandrapuri, Rudraprayag, Uttrakhand-246425",
      phone: "8860290020",
      image: "images/center/uttarakhand/utar5.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3523236.489012947!2d79.063402!3d30.417369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909cb067bf05f63%3A0xb368b2be9db7e227!2sPMKK%20Rudraprayag!5e0!3m2!1sen!2sin!4v1761827058483!5m2!1sen!2sin" 
    },
    {
      name: "Pauri Garhwal (PMKK)",
      address: "Kahta No. 104, Khet No. 1148, 1182, 1180/2852 and 1180/2853, Village Aithana, Tehsil-Srinagar, Pargana Devalgarh, Dist-Pauri Garhwal, Uttrakhand-682032",
      phone: "9760805503",
      image: "images/center/uttarakhand/utar6.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3530569.168383965!2d78.766619!3d30.213643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909a548d841e1b3%3A0xafadd1b9286b2f8e!2sPradhan%20Mantri%20Kaushal%20Kendra%2C%20(PMKK)%20Pauri%2C%20Srinagar.!5e0!3m2!1sen!2sin!4v1761884827615!5m2!1sen!2sin" 
    },
    {
      name: "Tehri Garhwal (PMKK)",
      address: "Old Tehri Road, Opp. Mahindra Finance, Chamba Tehri Garhwal, Uttrakhand-249145",
      phone: "9891002753",
      image: "images/center/uttarakhand/utar7.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3525801.113897557!2d78.400724!3d30.346256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091db3acdba98d%3A0x5b488dbf88117cb6!2sPMKK%20Chamba%20Tehri%20Garhwal!5e0!3m2!1sen!2sin!4v1761884981279!5m2!1sen!2sin" 
    },
  ],
 
  "Haryana": [
    {
      name: "Farrukh Nagar",
      address: "Near Serva Haryana Gramin Bank, Pataudi Road, Farrukh Nagar, Haryana-122506",
      phone: "8607404284",
      image: "images/center/haryana/haryana1.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3604303.400117678!2d75.788295!3d28.090803000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d152ac9ca3755%3A0x6238533eac05c20!2sF-tec%20computer%20Skill%20Center!5e0!3m2!1sen!2sin!4v1761821885156!5m2!1sen!2sin"
    },
    {
      name: "Pataudi",
      address: "1st Floor, Above Canara Bank, Near Shiv Murti, Haily Mandi Road, Pataudi, Haryana-122504",
      phone: "8950541492",
      image: "images/center/haryana/haryana2.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14047.855357360548!2d76.776001!3d28.329696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d411f6d310825%3A0x9f94ec4bf50c72f4!2sF-TEC%20Skill%20Development!5e0!3m2!1sen!2sin!4v1761822032949!5m2!1sen!2sin"
    },
    {
      name: "Kharkhoda",
      address: "OM Info, office at BMS Tower, Opposite Bus stand, W.No-2, Shastri Colony, Kharkhoda, Sonepat, Haryana-131402",
      phone: "9315368658",
      image: "images/center/haryana/haryana3.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13974.478756898541!2d76.916047!3d28.879928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da38fc189987b%3A0x177c782b0bfa5db0!2sF-TEC%20Skill%20Development%20Centre%20Kharkhoda!5e0!3m2!1sen!2sin!4v1761822199454!5m2!1sen!2sin" 
    },
    {
      name: "Gurgaon",
      address: "SC O-37, Basement, Sector 12-A, Opp. Telephone Exchange, Gurgaon Delhi Road, Haryana-1122001",
      phone: "9999454918",
      image: "images/center/haryana/haryana4.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448942.1824840242!2d77.035826!3d28.468679!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19b52e996457%3A0x1bdffae2c28ba1b0!2sF-TEC%20Computer%20Education!5e0!3m2!1sen!2sin!4v1761822414053!5m2!1sen!2sin"
    },
    {
      name: "Badshahpur",
      address: "1st Floor, Jaildar Market, Opp. Police Station, Teekli Road Badshapur, Gurgaon, Haryana-122101",
      phone: "9911284090",
      image: "images/center/haryana/haryana5.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.9562059563564!2d77.04618017521997!3d28.390390675797825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22f093b1725b%3A0x9718417777f439f0!2sBadshahpur%20Police%20Station!5e0!3m2!1sen!2sin!4v1761822646597!5m2!1sen!2sin"
    },
  ],

  "North East Delhi": [
    {
      name: "Karawal Nagar",
      address: "141A, Kh. No. 37 & 40, Chandu Nagar, Main Karawal Nagar Road, Delhi-110094",
      phone: " 8882196889",
      image: "images/center/north-east-delhi/karawal.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d895825.031945948!2d77.262335!3d28.710085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd146632af07%3A0xdc43d08d9b936420!2sPMKK%20North%20East%20Delhi!5e0!3m2!1sen!2sin!4v1761823523030!5m2!1sen!2sin"
    }
  ],

  "Jharkhand": [
    {
      name: "Chatra (PMKK)",
      address: "Kisunpur, Ranchi Road, New India Oil Petrol Pump, Chatra, Jharkhand-825401",
      phone: "8709726184",
      image: "images/center/jharkhand/jhar1.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14558.025924519901!2d84.873197!3d24.189035!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cac3759a1d879%3A0x5896dab3f22a842f!2sPMKK%2C%20Chatra!5e0!3m2!1sen!2sin!4v1761824075974!5m2!1sen!2sin" 
    },
    {
      name: "Garhwa (PMKK)",
      address: "Murka, Near Hur More, Daltonganj Garhwa Road, Jharkhand-822114",
      phone: "8709164701",
      image: "images/center/jharkhand/jhar2.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d233186.0484307887!2d84.079662!3d24.047563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c77d07575bf15%3A0x6cb6ce98e26ce7fe!2sMedininagar%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1761824319906!5m2!1sen!2sin"
    },
    {
      name: "Gumla (PMKK)",
      address: "PMKK, Gumla Vikas Bharti, Bishunpur, Jharkhand-835231",
      phone: "7858866322",
      image: "images/center/jharkhand/jhar3.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3759560.060576777!2d84.537989!3d23.044128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ae917e7980893%3A0xd31108d16fdcccbf!2sPradhan%20Mantri%20Kaushal%20Kendra%20%2CGumla!5e0!3m2!1sen!2sin!4v1761824484063!5m2!1sen!2sin" 
    },
    {
      name: "Latehar (PMKK)",
      address: "Hotwag, Daltonganj Road, Latehar, Jharkhand-829206",
      phone: "7909069457",
      image: "images/center/jharkhand/jhar4.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d116836.22077214057!2d84.45112!3d23.778317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398b6f9b44b0e45b%3A0x37b77434679cfa03!2sPMKK%20LATEHAR!5e0!3m2!1sen!2sin!4v1761824684717!5m2!1sen!2sin" 
    },
    {
      name: "Palamu (PMKK)",
      address: "Patanmore, Kajri, Post Office Newdhia, Daltonganj, Palamu, Jharkhand-822123",
      phone: "7654133403",
      image: "images/center/jharkhand/jhar5.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d116532.07065930286!2d84.077306!3d24.114602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c7737091a8e07%3A0xccf29fd30b592d92!2sPRADHANMANTRI%20KAUSHAL%20KENDRA%20(PMKK)%20PALAMU!5e0!3m2!1sen!2sin!4v1761824868251!5m2!1sen!2sin" 
    },
  ],

  "North West Delhi": [
    {
      name: "Bakhtawarpur",
      address: "120/49, 2nd floor, Opp. Choturam Public School, Bakhtawarpur, Delhi-110036",
      phone: "8130444626",
      image: "images/center/north-east-delhi/karawal.jpg",
      //mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13982.041825596252!2d77.172217!3d28.823658999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dab4f71414e7f%3A0x95899065e3c1ec71!2sF-TEC%20Skill%20Development!5e0!3m2!1sen!2sin!4v1761825204545!5m2!1sen!2sin" 
    }
  ],

  

  //"Haryana": [
  //  {
  //    name: "Farrukh Nagar",
  //    address: "Near Serva Haryana Gramin Bank, Haryana Gurgaon ,Pataudi Road, Farrukh Nagar, Haryana-122506",
   //   phone: "8607404284",
  //    image: "https://via.placeholder.com/400x200?text=Shahdara+Centre",
  //    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
  //  },
   // {
   //   name: "Pataudi",
   //   address: "1st Floor, Above Canara Bank, Near Shiv Murti, Haily Mandi Road, Pataudi, Haryana-122504",
   //   phone: "8950541492",
    //  image: "https://via.placeholder.com/400x200?text=Shahdara+Centre",
   //   mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
   // },
   // {
   //   name: "Kharkhoda",
   //   address: "OM Info, office at BMS Tower, Opposite Bus stand, W.No-2, Shastri Colony, Kharkhoda, Sonepat, Haryana-131402",
   //   phone: "9315368658",
   //   image: "https://via.placeholder.com/400x200?text=Shahdara+Centre",
   //   mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
   // },
   // {
    //  name: "Farrukh Nagar",
    //  address: "Near Serva Haryana Gramin Bank, Haryana Gurgaon ,Pataudi Road, Farrukh Nagar, Haryana-122506",
    //  phone: "8607404284",
    //  image: "https://via.placeholder.com/400x200?text=Shahdara+Centre",
    //  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
    //},
    //{
    //  name: "Farrukh Nagar",
     // address: "Near Serva Haryana Gramin Bank, Haryana Gurgaon ,Pataudi Road, Farrukh Nagar, Haryana-122506",
     // phone: "8607404284",
     // image: "https://via.placeholder.com/400x200?text=Shahdara+Centre",
     // mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.14353921348!2d77.2890403!3d28.682854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf115a3e9b%3A0x3bb6a18b8fc03a90!2sDurga%20Bhawan!5e0!3m2!1sen!2sin!4v1684754695500!5m2!1sen!2sin"
   // },
  //],

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
