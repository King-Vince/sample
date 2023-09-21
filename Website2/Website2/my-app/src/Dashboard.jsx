
import React from 'react';
import Sidebar from './Sidebar.jsx';
import NewsSection from './NewsSection';
import './Dashboard.css';
import './w3bar.css'; 
import textLogo from './images/textlogo.png';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Top navigation bar */}
      <div className="w3-bar">
      <div className="text-wrapper">
  <img src={textLogo} alt="Saint Francis Logo" className="logo" />
</div>
        <a href="1" className="w3-bar-item">Home</a>
        <a href="2" className="w3-bar-item">About SFC-College</a>
        <a href="3" className="w3-bar-item">Contact Us</a>
      </div>

      {/* Main content */}
      <div className="content">
        <Sidebar />
        <NewsSection />
      </div>
    </div>
  );
};

export default Dashboard;
