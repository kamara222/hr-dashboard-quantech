import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Card from '../components/Card';
import BigCard from '../components/BigCard';
import ActivityCard from '../components/ActivityCard';
import AnnouncementList from '../components/AnnouncementList';
import ScheduleList from '../components/ScheduleList';
import { Briefcase, Users } from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="main-content">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="dashboard-container">
          <h2 className="page-title">Dashboard</h2>

          {/* Row 1 */}
          <div className="cards-grid top-cards">
            <Card
              title="Available Position"
              value="24"
              subtitle="4 Urgently needed"
              color="#ff6b6b"
              icon={Briefcase}
            />
            <Card
              title="Job Open"
              value="10"
              subtitle="4 Active hiring"
              color="#3b82f6"
              icon={Briefcase}
            />
            <Card
              title="New Employees"
              value="24"
              subtitle="4 Department"
              color="#ec4899"
              icon={Users}
            />
          </div>

          {/* Row 2 */}
          <div className="cards-grid middle-section">
            <BigCard
              title="Total Employees"
              value="216"
              trendText="+2% Past month"
              menCount={120}
              womenCount={96}
              chartColor="#ff6b6b"
            />
            <BigCard
              title="Talent Request"
              value="16"
              trendText="+5% Past month"
              menCount={6}
              womenCount={10}
              chartColor="#ff6b6b"
            />
            <ActivityCard />
          </div>

          {/* Row 3 */}
          <div className="cards-grid bottom-section">
            <AnnouncementList />
            <ScheduleList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;