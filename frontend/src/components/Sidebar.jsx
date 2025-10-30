// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { X } from 'lucide-react';

// 🖼️ Importation des images depuis ton dossier assets
import dashboardImg from '../assets/Dashboard.png';
import recruitmentImg from '../assets/Recruitment.png';
import scheduleImg from '../assets/Schedule.png';
import employeeImg from '../assets/Employee.png';
import departmentImg from '../assets/Department.png';
import supportImg from '../assets/Support.png';
import settingsImg from '../assets/Settings.png';

const Sidebar = ({ isOpen, toggleSidebar, onMenuClick }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  // 🧭 Menu principal
  const mainMenu = [
    { icon: dashboardImg, label: 'Dashboard' },
    { icon: recruitmentImg, label: 'Recruitment' },
    { icon: scheduleImg, label: 'Schedule' },
    { icon: employeeImg, label: 'Employee' },
    { icon: departmentImg, label: 'Department' },
  ];

  // ⚙️ Autre menu
  const otherMenu = [
    { icon: supportImg, label: 'Support' },
    { icon: settingsImg, label: 'Settings' },
  ];

  const handleClick = (label) => {
    setActiveItem(label);
    onMenuClick(label);
  };

  return (
    <>
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h1>WeHR</h1>
          <button className="close-sidebar" onClick={toggleSidebar}>
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {/* SECTION PRINCIPALE */}
          <span className="menu-title">MAIN MENU</span>
          <ul>
            {mainMenu.map((item) => (
              <li key={item.label}>
                <div
                  className={`nav-link ${activeItem === item.label ? 'active' : ''}`}
                  onClick={() => handleClick(item.label)}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-5 h-5 object-contain"
                  />
                  <span>{item.label}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* AUTRE SECTION */}
          <span className="menu-title">OTHER</span>
          <ul>
            {otherMenu.map((item) => (
              <li key={item.label}>
                <div
                  className={`nav-link ${activeItem === item.label ? 'active' : ''}`}
                  onClick={() => handleClick(item.label)}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-5 h-5 object-contain"
                  />
                  <span>{item.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
