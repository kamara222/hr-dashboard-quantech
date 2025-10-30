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
      
      <ul>
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {index === 0 && item.priority && <span className="priority-tag">Priority</span>}
            
            {item.category && (
              <div className="schedule-category">{item.category}</div>
            )}
            
            <div className="list-item-wrapper">
              <div className="item-content">
                <div className="item-title">{item.title}</div>
                <div className="item-time">{item.time}</div>
              </div>
              <div className="item-actions">
                <button className="more-btn"><MoreHorizontal size={16} /></button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <a href="#" className="see-all-link">Creat a New Schedule</a>
    </div>
  );
};

export default ScheduleList;