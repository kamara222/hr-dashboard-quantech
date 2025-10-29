import React from 'react';
import { Search, Bell, MessageSquare, ChevronDown, Menu } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header-actions">
        <button className="icon-btn">
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>
        <button className="icon-btn">
          <MessageSquare size={20} />
        </button>
        <div className="user-menu">
          <div className="user-avatar"></div>
          <span className="user-name">Admirra John</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
};

export default Header;