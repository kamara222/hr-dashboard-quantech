import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const AnnouncementList = () => {
  const announcements = [
    { title: "Outing schedule for every departement", time: "5 Minutes ago" },
    { title: "Meeting HR Department", time: "Yesterday, 12:30 PM" },
    { title: "IT Department need two more talents for UX/UI Designer position", time: "Yesterday, 09:15 AM" },
  ];

  return (
    <div className="list-card">
      <div className="list-header">
        <h3>Announcement</h3>
        <select>
          <option>Today, 13 Sep 2021</option>
        </select>
      </div>
      <ul>
        {announcements.map((item, index) => (
          <li key={index} className="list-item">
            <div className="item-content">
              <div className="item-title">{item.title}</div>
              <div className="item-time">{item.time}</div>
            </div>
            <div className="item-actions">
              <button className="pin-btn">Pin</button>
              <button className="more-btn"><MoreHorizontal size={16} /></button>
            </div>
          </li>
        ))}
      </ul>
      <a href="#" className="see-all-link">See All Announcement</a>
    </div>
  );
};

export default AnnouncementList;