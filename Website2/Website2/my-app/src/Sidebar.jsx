
import React from 'react';
import './Sidebar.css';
import profileDefault from './images/profileJPEG1.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Profile section */}
      <div className="profile">
        <img src={profileDefault} alt="Profile" />
        <h3>Vince Tan</h3>
        <button className="logout-btn">Logout</button>
      </div>

      {/* Menu section */}
      <ul className="menu">
        <li className="menu-item">Home</li>
        <li className="menu-item">Enrollment</li>
        <li className="menu-item">PayScheme</li>
        <li className="menu-item">Grades</li>
        <li className="menu-item">Account</li>
        <li className="menu-item">Pay Online</li>
        <li className="menu-item">Profile</li>
        <li className="menu-item">Data Privacy</li>
      </ul>
    </div>
  );
};

export default Sidebar;