import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import './App.css';
import About from './components/about/About';
// Removed duplicate import of Institutions
//import Footer from './components/footer/Footer';


//import Insights from './components/insights/Insights';

import Institutions from './components/Institutions/institutions';
import Projects from './components/projects/Projects';
import Career from './components/career/Career';
import Partners from './components/partners/Partners';
import Privacy from './components/privacy/Privacy';
import Journey from './components/journey/Journey';
import Operations from './components/operations/Operations';
import Leadership from './components/leadership/Leadership';
import Achieve from './components/achieve/Achieve';
import Founder from './components/founder/Founder';
import Centers from './components/centers/Centers';
import Ser from './components/ser/Ser';
import JobPost1 from './components/jobpost/JobPost1';




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes as needed */}
         <Route path="/about" element={<About />} />
        
        <Route path="/instutions" element={<Institutions />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/career" element={<Career />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/achieve" element={<Achieve />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/centers" element={<Centers />} />
         <Route path="/ser" element={<Ser />} />
         <Route path="/jobpost" element={<JobPost1 />} />
        {/* <Route path="/insights" element={<Insights />} /> */}
        {/* Add more routes as needed */}
       
       
        
         
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;