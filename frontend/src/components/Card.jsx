import React from 'react';

const Card = ({ title, value, subtitle, color, icon: Icon, backgroundColor }) => {
  return (
    <div className="simple-card" style={{ backgroundColor }}>
      {/* <div className="card-icon-wrapper" style={{ background: color }}>
        {Icon && <Icon size={28} color={color} style={{ opacity: 1 }} />}
      </div> */}
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-value">{value}</div>
        <div className="card-subtitle" style={{ color: color }}>
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default Card;