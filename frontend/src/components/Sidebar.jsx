import React, { useState } from 'react';
import { LayoutDashboard, Users, Calendar, Briefcase, Building2, Headphones, Settings, X } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const mainMenu = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Users, label: 'Recruitment' },
    { icon: Calendar, label: 'Schedule' },
    { icon: Briefcase, label: 'Employee' },
    { icon: Building2, label: 'Department' },
  ];

  const otherMenu = [
    { icon: Headphones, label: 'Support' },
    { icon: Settings, label: 'Settings' },
  ];

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
          <span className="menu-title">MAIN MENU</span>
          <ul>
            {mainMenu.map((item) => (
              <li key={item.label}>
                <div
                  className={`nav-link ${activeItem === item.label ? 'active' : ''}`}
                  onClick={() => setActiveItem(item.label)}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </div>
              </li>
            ))}
          </ul>

          <span className="menu-title">OTHER</span>
          <ul>
            {otherMenu.map((item) => (
              <li key={item.label}>
                <div className="nav-link" onClick={() => setActiveItem(item.label)}>
                  <item.icon size={20} />
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