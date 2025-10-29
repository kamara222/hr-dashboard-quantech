// src/App.jsx
import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Employee from './pages/Employee';
import './styles/global.css';
import './styles/employee.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  const handleBack = () => {
    setCurrentPage('Dashboard');
  };

  return (
    <>
      {currentPage === 'Dashboard' && <Dashboard onMenuClick={handleMenuClick} />}
      {currentPage === 'Employee' && <Employee onBack={handleBack} />}
    </>
  );
}

export default App;