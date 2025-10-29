import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const ScheduleList = () => {
  const items = [
    { title: "Review candidate applications", time: "Today - 11:30 AM", priority: true },
    { title: "Interview with candidates", time: "Today - 10:30 AM", category: "Other" },
    { title: "Short meeting with product designer from IT Departement", time: "Today - 09:15 AM" },
  ];

  return (
    <div className="list-card">
      <div className="list-header">
        <h3>Upcoming Schedule</h3>
        <select>
          <option>Today, 13 Sep 2021</option>
        </select>
      </div>
      
      {items[0].priority && <span className="priority-tag">Priority</span>}
      <ul>
        <li className="list-item">
          <div className="item-content">
            <div className="item-title">{items[0].title}</div>
            <div className="item-time">{items[0].time}</div>
          </div>
          <button className="more-btn"><MoreHorizontal size={16} /></button>
        </li>
        
        <li className="list-item" style={{ marginTop: '1rem' }}>
          <div className="item-content">
            <div style={{ fontSize: '0.85rem', color: '#999', marginBottom: '0.5rem' }}>Other</div>
            <div className="item-title">{items[1].title}</div>
            <div className="item-time">{items[1].time}</div>
          </div>
          <button className="more-btn"><MoreHorizontal size={16} /></button>
        </li>
        
        <li className="list-item">
          <div className="item-content">
            <div className="item-title">{items[2].title}</div>
            <div className="item-time">{items[2].time}</div>
          </div>
          <button className="more-btn"><MoreHorizontal size={16} /></button>
        </li>
      </ul>
      <a href="#" className="see-all-link">Creat a New Schedule</a>
    </div>
  );
};

export default ScheduleList;