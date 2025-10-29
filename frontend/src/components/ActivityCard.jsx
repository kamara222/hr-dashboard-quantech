import React from 'react';

const ActivityCard = () => {
  return (
    <div className="activity-card">
      <div>
        <h3>Recently Activity</h3>
        <p className="time">10:40 AM, Fri 10 Sept 2021</p>
        <p className="message">You Posted a New Job</p>
        <p className="desc">
          Kindly check the requirements and terms of work and make sure everything is right.
        </p>
      </div>
      <div className="activity-footer">
        <span className="activity-count">Today you makes 12 Activity</span>
        <button className="btn-activity">See All Activity</button>
      </div>
    </div>
  );
};

export default ActivityCard;